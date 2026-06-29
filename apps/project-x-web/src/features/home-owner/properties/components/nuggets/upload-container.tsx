"use client";

import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import React, { useRef } from "react";
import { UploadImage as UploadIcon } from "@repo/icons";
import Image from "next/image";




type UploadBoxProps = {
    value?: string | null;
    onChange?: (file: File | null) => void;
    className?: string;
    accept?: string;
    type?: "image" | "video";
};

export const UploadBox = ({
    value,
    onChange,
    className,
    accept = "image/*",
    type = "image",
}: UploadBoxProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFiles = (files: FileList | null) => {
        const file = files?.[0];
        if (!file) return;
        onChange?.(file);
    };

    return (
        <Container
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                handleFiles(e.dataTransfer.files);
            }}
            className={`relative cursor-pointer border border-dashed border-s75 rounded-2xl bg-s50 flex items-center justify-center overflow-hidden ${className}`}
        >
            <input
                ref={inputRef}
                type="file"
                hidden
                accept={accept}
                onChange={(e) => handleFiles(e.target.files)}
            />

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
                    <video
                        src={value}
                        className="w-full h-full object-cover"
                        controls
                    />
                )
            ) : (
                <Container className="flex flex-col items-center gap-2">
                    <UploadIcon className="text-s300" />
                    <Text variant="body-sm" tone="p300" className="text-center">
                        Click to upload or drag & drop
                    </Text>
                </Container>
            )}
        </Container>
    );
};