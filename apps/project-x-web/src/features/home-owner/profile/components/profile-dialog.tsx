"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type FormEvent,
} from "react";
import { Check, Close, Warning, DialogDecorationIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import type { DialogType, ProfileFormValues } from "../types/profile.types";
import { passwordRequirements } from "../profile.constants";
import { ChangePasswordFields } from "./change-password-fields";
import { EditProfileFields } from "./edit-profile-fields";

type ProfileDialogProps = {
  type: DialogType;
  onClose: () => void;
  profileValues: ProfileFormValues;
};

export function ProfileDialog({ type, onClose, profileValues }: ProfileDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isDelete = type.startsWith("delete");
  const isAccount = type === "delete-account";

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
    return () => {
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      const box = event.currentTarget.getBoundingClientRect();
      if (
        event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom
      ) {
        onClose();
      }
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(
      isDelete
        ? "Deletion is not connected yet. Your data has not been deleted."
        : "Saving is not connected yet. Your changes have not been saved.",
    );
  };

  return (
    <Container
      as="dialog"
      ref={dialogRef}
      className={`fixed inset-0 m-auto max-h-[calc(100dvh-32px)] overflow-y-auto rounded-2xl border border-line bg-surface p-0 text-primary backdrop:bg-black/73 [&_button]:cursor-pointer [&_button:disabled]:cursor-not-allowed [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-p300 [&_button:focus-visible]:outline-offset-[3px] [&_input:focus-visible]:outline-2 [&_input:focus-visible]:outline-p300 [&_input:focus-visible]:outline-offset-[3px] [&_select:focus-visible]:outline-2 [&_select:focus-visible]:outline-p300 [&_select:focus-visible]:outline-offset-[3px] ${isDelete ? "w-[min(280px,calc(100vw-32px))]" : "w-[min(380px,calc(100vw-32px))]"}`}
      onCancel={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="profile-dialog-title"
    >
      <Container as="form" onSubmit={handleSubmit}>
        {isDelete ? (
          <Container
            className={`relative mx-1 mt-1 grid h-24 place-items-center overflow-hidden rounded-xl ${isAccount ? "bg-d50 text-d300" : "bg-w50 text-w300"}`}
            aria-hidden="true"
          >
            <DialogDecorationIcon
              backgroundColor={isAccount ? "var(--d50)" : "var(--w50)"}
              color={isAccount ? "var(--d75)" : "var(--w75)"}
              className="absolute inset-0 h-full w-full"
            />
            <Warning size={66} className="relative" />
          </Container>
        ) : (
          <Container
            as="header"
            className="mx-3.5 border-b border-line py-3 [&_h2]:m-0 [&_h2]:text-lg [&_h2]:font-bold"
          >
            <Text as="h2" variant="body-sm" id="profile-dialog-title">
              {type === "password"
                ? "Change your password 🔑"
                : "Edit your profile"}
            </Text>
          </Container>
        )}
        <Container
          className={isDelete ? "px-2.5 py-4" : "px-3.5 pt-[18px] pb-[22px]"}
        >
          {type === "password" && (
            <ChangePasswordFields
              password={password}
              onPasswordChange={setPassword}
            />
          )}
          {type === "profile" && <EditProfileFields defaultValues={profileValues} />}
          {isDelete && (
            <>
              <Text
                as="h2"
                variant="body-sm"
                id="profile-dialog-title"
                className="mt-0 mb-2 text-[13px] font-medium"
              >
                Delete your {isAccount ? "account" : "profile"}
              </Text>
              <Text
                as="p"
                variant="body-xs"
                className="m-0 text-xs leading-[1.45] text-secondary"
              >
                {isAccount
                  ? "You’re about to delete your account, all created profile will be erase and access to them lost."
                  : "You’re about to delete your profile, this will archive all your property and revoke your access. All property will be classed out accordingly"}
              </Text>
            </>
          )}
          {error && (
            <Text
              as="p"
              variant="body-xs"
              role="alert"
              className="mt-3 mb-0 text-xs text-d300"
            >
              {error}
            </Text>
          )}
        </Container>
        <Container
          as="footer"
          className={`flex gap-2.5 border-t border-line [&_button]:flex [&_button]:flex-1 [&_button]:items-center [&_button]:justify-center [&_button]:gap-2 [&_button]:rounded-lg [&_button]:font-semibold ${isDelete ? "mx-2.5 py-3 [&_button]:h-8 [&_button]:text-xs" : "mx-3.5 py-3.5 [&_button]:h-10 [&_button]:text-[13px]"}`}
        >
          <Button type="button" variant="muted" shorter onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant={isDelete ? "danger" : "primary"}
            shorter
            rightIcon={isDelete ? <Close size={12} /> : <Check size={14} />}
            disabled={
              type === "password" &&
              !passwordRequirements.every(([, pattern]) =>
                pattern.test(password),
              )
            }
          >
            {isDelete ? "Delete" : "Save"}
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
