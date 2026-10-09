import { Fragment, type CSSProperties } from "react";
import { Tilt3D } from "@/components/v2/tilt-3d";

/**
 * Hand-built 3D scenes for page heroes, made of real CSS cuboids on a ground slab (no icons,
 * no images): towers for property, rising bars for paid media and search, floating post tiles
 * for social and brand work, stacked page layers for websites, map pins for local work. Each
 * scene animates (rise, bob, spread, pulse), sways on its own and leans toward the pointer.
 * Reduced motion: a still, angled view. Decorative.
 */
export type SceneKind = "towers" | "bars" | "tiles" | "layers" | "pins";

type BoxProps = {
  x: number;
  y: number;
  w: number;
  d: number;
  h: number;
  z?: number;
  kind?: "solid" | "tower" | "ground" | "glass" | "hot";
  anim?: "rise" | "bob" | "pulse" | "spread";
  delay?: number;
};

function Box({ x, y, w, d, h, z = 0, kind = "solid", anim, delay = 0 }: BoxProps) {
  const style = {
    left: x,
    top: y,
    width: w,
    height: d,
    "--h": `${h}px`,
    "--z": `${z}px`,
    "--delay": `${delay}ms`,
  } as CSSProperties;
  return (
    <div className={`mx-box mx-box--${kind}${anim ? ` mx-anim-${anim}` : ""}`} style={style}>
      <i className="mx-box__w" />
      <i className="mx-box__n" />
      <i className="mx-box__e" />
      <i className="mx-box__s" />
      <i className="mx-box__top" />
    </div>
  );
}

const ground = <Box x={0} y={0} w={240} d={240} h={12} kind="ground" />;

const scenes: Record<SceneKind, JSX.Element> = {
  towers: (
    <>
      {ground}
      <Box x={30} y={40} w={58} d={58} h={150} z={12} kind="tower" anim="rise" delay={0} />
      <Box x={104} y={28} w={56} d={56} h={205} z={12} kind="tower" anim="rise" delay={120} />
      <Box x={172} y={96} w={44} d={66} h={112} z={12} kind="tower" anim="rise" delay={240} />
      <Box x={40} y={132} w={52} d={74} h={88} z={12} kind="tower" anim="rise" delay={360} />
      <Box x={112} y={122} w={40} d={40} h={58} z={12} kind="hot" anim="rise" delay={480} />
    </>
  ),
  bars: (
    <>
      {ground}
      {[50, 82, 116, 154, 205].map((h, i) => (
        <Box key={h} x={18 + i * 42} y={104} w={30} d={30} h={h} z={12} kind={i === 4 ? "hot" : "solid"} anim="pulse" delay={i * 160} />
      ))}
      <Box x={18} y={168} w={198} d={8} h={4} z={12} kind="glass" />
    </>
  ),
  tiles: (
    <>
      {ground}
      {Array.from({ length: 9 }, (_, i) => {
        const r = Math.floor(i / 3);
        const c = i % 3;
        return (
          <Box key={i} x={22 + c * 70} y={22 + r * 70} w={56} d={56} h={8} z={34} kind={i === 4 ? "hot" : "solid"} anim="bob" delay={(r + c) * 220} />
        );
      })}
    </>
  ),
  layers: (
    <>
      {ground}
      {[30, 74, 118, 162].map((z, i) => (
        <Box key={z} x={30} y={40} w={180} d={150} h={8} z={z} kind={i === 3 ? "solid" : "glass"} anim="spread" delay={i * 150} />
      ))}
    </>
  ),
  pins: (
    <>
      <Box x={0} y={0} w={240} d={240} h={12} kind="ground" />
      <span className="mx-scene__ring" style={{ left: 104, top: 96 }} />
      {[
        { x: 112, y: 104, h: 120 },
        { x: 40, y: 50, h: 78 },
        { x: 182, y: 60, h: 92 },
        { x: 60, y: 172, h: 64 },
        { x: 176, y: 176, h: 70 },
      ].map((p, i) => (
        <Fragment key={i}>
          <Box x={p.x} y={p.y} w={8} d={8} h={p.h} z={12} kind="solid" />
          <Box x={p.x - 7} y={p.y - 7} w={22} d={22} h={22} z={12 + p.h} kind={i === 0 ? "hot" : "solid"} anim="bob" delay={i * 260} />
        </Fragment>
      ))}
    </>
  ),
};

export function Scene3D({ kind, className = "" }: { kind: SceneKind; className?: string }) {
  return (
    <Tilt3D className={`mx-scene ${className}`}>
      <div className="mx-scene__world">
        <div className="mx-scene__spin">{scenes[kind]}</div>
      </div>
      <span className="mx-scene__glow" />
    </Tilt3D>
  );
}
