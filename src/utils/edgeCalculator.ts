import { Aromachemical, GraphEdge } from '../types';

interface PairingFrequency {
  sourceToTarget: boolean;
  targetToSource: boolean;
}

function getEdgeKey(id1: number, id2: number): string {
  return id1 < id2 ? `${id1}-${id2}` : `${id2}-${id1}`;
}

export function calculateEdges(aromachemicals: Aromachemical[]): GraphEdge[] {
  const edgeMap = new Map<string, PairingFrequency>();

  aromachemicals.forEach((aroma) => {
    aroma.pairings.forEach((targetId) => {
      const key = getEdgeKey(aroma.id, targetId);

      if (!edgeMap.has(key)) {
        edgeMap.set(key, {
          sourceToTarget: false,
          targetToSource: false,
        });
      }

      const freq = edgeMap.get(key)!;
      if (aroma.id < targetId) {
        freq.sourceToTarget = true;
      } else {
        freq.targetToSource = true;
      }
    });
  });

  const edges: GraphEdge[] = [];

  edgeMap.forEach((freq, key) => {
    const [source, target] = key.split('-').map(Number);
    const isBidirectional = freq.sourceToTarget && freq.targetToSource;
    const strength = isBidirectional ? 2 : 1;

    edges.push({
      source,
      target,
      strength,
      isBidirectional,
    });
  });

  return edges;
}

export function getEdgeStyle(strength: number) {
  return {
    strokeWidth: strength * 1.5,
    opacity: 0.3 + strength * 0.1,
    strokeDasharray: strength === 1 ? '3,3' : undefined,
  };
}
