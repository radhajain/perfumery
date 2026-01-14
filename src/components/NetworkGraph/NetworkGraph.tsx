import React from 'react';
import { Group } from '@visx/group';
import { Line } from '@visx/shape';
import { Zoom } from '@visx/zoom';
import { GraphData, GraphNode, LayoutDimensions } from '../../types';
import { families } from '../../data/perfumery-constants';
import { getEdgeStyle } from '../../utils/edgeCalculator';
import './NetworkGraph.css';
import { InfoCard } from './InfoCard';

interface NetworkGraphProps {
	graphData: GraphData;
	selectedNodeId: number | null;
	hoveredNodeId: number | null;
	highlightedNodeIds: Set<number>;
	onNodeClick: (id: number) => void;
	onNodeHover: (id: number | null) => void;
	dimensions: LayoutDimensions;
}

export const NetworkGraph: React.FC<NetworkGraphProps> = ({
	graphData,
	selectedNodeId,
	hoveredNodeId,
	highlightedNodeIds,
	onNodeClick,
	onNodeHover,
	dimensions,
}) => {
	const { width, height } = dimensions;

	const getNodeById = (id: number) => {
		return graphData.nodes.find((n) => n.id === id);
	};

	const getNodeOpacity = (nodeId: number) => {
		if (highlightedNodeIds.size === 0) return 1;
		return highlightedNodeIds.has(nodeId) ? 1 : 0.15;
	};

	const getEdgeOpacity = (sourceId: number, targetId: number) => {
		if (highlightedNodeIds.size === 0) return 0.3;
		if (
			selectedNodeId &&
			(sourceId === selectedNodeId || targetId === selectedNodeId)
		) {
			return 0.6;
		}
		return 0.1;
	};

	const isNodeHovered = (nodeId: number) => hoveredNodeId === nodeId;
	const isNodeSelected = (nodeId: number) => selectedNodeId === nodeId;

	// Calculate node radius based on popularity (scale from 3-10 to radius 5-15)
	const getNodeRadius = (node: GraphNode, isHovered: boolean) => {
		const popularity = node.data.popularity;
		// Map popularity (3-10) to radius (5-15)
		const baseRadius = 5 + ((popularity - 3) / 7) * 10;
		return isHovered ? baseRadius * 1.2 : baseRadius;
	};

	const initialTransform = {
		scaleX: 1,
		scaleY: 1,
		translateX: 0,
		translateY: 0,
		skewX: 0,
		skewY: 0,
	};

	return (
		<div className="network-graph">
			<Zoom
				width={width}
				height={height}
				scaleXMin={0.5}
				scaleXMax={4}
				scaleYMin={0.5}
				scaleYMax={4}
				initialTransformMatrix={initialTransform}
			>
				{(zoom: any) => (
					<div className="network-graph__container">
						<svg
							width={width}
							height={height}
							className="network-graph__svg"
							style={{ cursor: zoom.isDragging ? 'grabbing' : 'grab' }}
						>
							<rect
								width={width}
								height={height}
								fill="transparent"
								onTouchStart={zoom.dragStart}
								onTouchMove={zoom.dragMove}
								onTouchEnd={zoom.dragEnd}
								onMouseDown={zoom.dragStart}
								onMouseMove={zoom.dragMove}
								onMouseUp={zoom.dragEnd}
								onMouseLeave={() => {
									if (zoom.isDragging) zoom.dragEnd();
								}}
								onWheel={(event) => {
									event.preventDefault();
									const point = { x: event.clientX, y: event.clientY };
									const delta = event.deltaY;
									const scaleFactor = delta > 0 ? 0.9 : 1.1;
									zoom.scale({
										scaleX: scaleFactor,
										scaleY: scaleFactor,
										point,
									});
								}}
							/>
							<Group transform={zoom.toString()}>
								{/* Render edges */}
								{graphData.edges.map((edge) => {
									const sourceNode = getNodeById(edge.source);
									const targetNode = getNodeById(edge.target);
									if (!sourceNode || !targetNode) return null;

									const style = getEdgeStyle(edge.strength);

									return (
										<Line
											key={`edge-${edge.source}-${edge.target}`}
											from={{ x: sourceNode.x, y: sourceNode.y }}
											to={{ x: targetNode.x, y: targetNode.y }}
											stroke="#D4C4B4"
											strokeWidth={style.strokeWidth}
											strokeOpacity={getEdgeOpacity(edge.source, edge.target)}
											strokeDasharray={style.strokeDasharray}
											className="graph-edge"
										/>
									);
								})}

								{/* Render nodes */}
								{graphData.nodes.map((node) => {
									const opacity = getNodeOpacity(node.id);
									const isHovered = isNodeHovered(node.id);
									const isSelected = isNodeSelected(node.id);
									const radius = getNodeRadius(node, isHovered);
									const strokeWidth = isSelected ? 3 : 1.5;

									return (
										<g key={`node-${node.id}`}>
											<circle
												cx={node.x}
												cy={node.y}
												r={radius}
												fill={families[node.family]}
												stroke={isSelected ? '#3A3A3A' : '#fff'}
												strokeWidth={strokeWidth}
												opacity={opacity}
												className="graph-node"
												style={{
													cursor: 'pointer',
													transition: 'all 0.15s ease',
												}}
												onClick={() => onNodeClick(node.id)}
												onMouseEnter={() => onNodeHover(node.id)}
												onMouseLeave={() => onNodeHover(null)}
												tabIndex={0}
												role="button"
												aria-label={`${node.name}, ${node.family} family, ${node.note} note`}
												onKeyDown={(e) => {
													if (e.key === 'Enter' || e.key === ' ') {
														e.preventDefault();
														onNodeClick(node.id);
													}
												}}
											/>
										</g>
									);
								})}
								{hoveredNodeId !== null &&
									(() => {
										const hoveredNode = getNodeById(hoveredNodeId);
										if (!hoveredNode) return null;
										return (
											<InfoCard
												node={hoveredNode}
												familyColor={families[hoveredNode.family]}
												position={{ x: hoveredNode.x, y: hoveredNode.y }}
											/>
										);
									})()}
							</Group>
						</svg>
						<div className="network-graph__controls">
							<button
								className="network-graph__control-btn"
								onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}
								aria-label="Zoom in"
							>
								+
							</button>
							<button
								className="network-graph__control-btn"
								onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}
								aria-label="Zoom out"
							>
								−
							</button>
							<button
								className="network-graph__control-btn"
								onClick={zoom.reset}
								aria-label="Reset zoom"
							>
								⟲
							</button>
						</div>
					</div>
				)}
			</Zoom>
		</div>
	);
};
