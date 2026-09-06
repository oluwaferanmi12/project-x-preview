"use client";

import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import React, { useRef } from "react";
import { UploadImage as UploadIcon, SpinIcon } from "@repo/icons";
import Image from "next/image";

type UploadBoxProps = {
  value?: string | null;
  onChange?: (file: File | null) => void;
  className?: string;
  accept?: string;
  type?: "image" | "video";
  loading?: boolean;
};

export const UploadBox = ({
  value,
  onChange,
  className,
  accept = "image/*",
  type = "image",
  loading = false,
}: UploadBoxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (files: FileList | null) => {
    if (loading) return;
    const file = files?.[0];
    if (!file) return;
    onChange?.(file);
  };

  return (
    <Container
      onClick={() => !loading && inputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
      }}
      aria-busy={loading}
      className={`relative border border-dashed border-s75 rounded-2xl bg-s50 flex items-center justify-center overflow-hidden ${loading ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        accept={accept}
        disabled={loading}
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* UPLOADING OVERLAY */}
      {loading && (
        <Container className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-s50/90">
          <Container className="inline-flex animate-spin [animation-duration:1.5s] text-p300">
            <SpinIcon aria-hidden="true" size={24} />
          </Container>
          <Text variant="body-sm" tone="p300">
            Uploading {type}…
          </Text>
        </Container>
      )}

      {/* PREVIEW */}
      {value ? (
        type === "image" ? (
          <Image
            src={value}
            alt="upload"
            fill
            className="w-full h-full object-cover"
          />
        ) : (
          <video src={value} className="w-full h-full object-cover" controls />
        )
      ) : (
        <Container className="flex flex-col items-center gap-2">
          <UploadIcon className="text-s300" />
          <Text variant="body-xs" tone="p300" className="text-center">
            Click to upload or drag & drop
          </Text>
        </Container>
      )}
    </Container>
  );
};
