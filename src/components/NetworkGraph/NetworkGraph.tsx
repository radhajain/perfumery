import React from 'react';
import { Group } from '@visx/group';
import { Line } from '@visx/shape';
import { GraphData, LayoutDimensions } from '../../types';
import { families } from '../../data/perfumery-constants';
import { getEdgeStyle } from '../../utils/edgeCalculator';
import './NetworkGraph.css';

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
  dimensions
}) => {
  const { width, height } = dimensions;

  const getNodeById = (id: number) => {
    return graphData.nodes.find(n => n.id === id);
  };

  const getNodeOpacity = (nodeId: number) => {
    if (highlightedNodeIds.size === 0) return 1;
    return highlightedNodeIds.has(nodeId) ? 1 : 0.15;
  };

  const getEdgeOpacity = (sourceId: number, targetId: number) => {
    if (highlightedNodeIds.size === 0) return 0.3;
    if (selectedNodeId && (sourceId === selectedNodeId || targetId === selectedNodeId)) {
      return 0.6;
    }
    return 0.1;
  };

  const isNodeHovered = (nodeId: number) => hoveredNodeId === nodeId;
  const isNodeSelected = (nodeId: number) => selectedNodeId === nodeId;

  return (
    <div className="network-graph">
      <svg width={width} height={height} className="network-graph__svg">
        <Group>
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
            const radius = isHovered ? 10 : 8;
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
                  style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
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
                {isHovered && (
                  <text
                    x={node.x}
                    y={node.y - 18}
                    textAnchor="middle"
                    className="node-label"
                    fill="#3A3A3A"
                    fontSize="12"
                    fontFamily="Inter, Helvetica Neue, sans-serif"
                    pointerEvents="none"
                  >
                    {node.name}
                  </text>
                )}
              </g>
            );
          })}
        </Group>
      </svg>
    </div>
  );
};
