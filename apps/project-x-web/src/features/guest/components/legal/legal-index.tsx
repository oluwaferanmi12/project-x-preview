"use client";

import { useEffect, useState } from "react";
import { Container, Text } from "@repo/ui";
import type { LegalSection } from "../../data/legal-content";

export const LegalIndex = ({ sections }: { sections: LegalSection[] }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px" },
    );
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <Container className="sticky top-28 hidden self-start border-r border-line pr-6 lg:block">
      <Text variant="body-sm" tone="primary" className="mb-4 uppercase">
        Index
      </Text>
      <Container className="flex flex-col gap-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={activeId === section.id ? "true" : undefined}
          >
            <Text
              variant="body-sm"
              tone={activeId === section.id ? "primary" : "secondary"}
              className={activeId === section.id ? "font-semibold" : ""}
            >
              {section.title}
            </Text>
          </a>
        ))}
      </Container>
    </Container>
  );
};
