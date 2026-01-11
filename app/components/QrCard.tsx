"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QrCard({
  title,
  value
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="
      flex flex-col items-center gap-3
      rounded-xl border border-white/10
      bg-white/[0.04] p-4
    ">
      <QRCodeCanvas
        value={value}
        size={120}
        bgColor="transparent"
        fgColor="#edcb4c"
        level="H"
      />
      <span className="text-xs text-neutral-300">{title}</span>
    </div>
  );
}