import type { HTMLAttributes } from "react";
import { createElement, Suspense } from "react";

import { icons } from "./icons";
import React from "react";
export type IconName = keyof typeof icons;

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  // These props make styling component easier than creating new classes
  rotate?: number;
}

/**
 *
 * @param icon string key icon name
 * @param className string classes for styling
 * @param rotate optional number rotation of the icon
 * @returns Icon react component
 */
export const Icon = ({ icon, className, rotate, color, ...rest }: Props) => {
  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      <Suspense fallback={<div />}>
        {createElement(icons[icon], {
          style: { width: "100%", height: "100%" },
        })}
      </Suspense>
    </div>
  );
};

export default Icon;
