import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import { ContentWrapper } from "./content-wrapper";
import { Radio } from "@repo/ui";

export const SingleSelectForm = ({
    text,
    checked,
    onChange,
}: {
    text: string;
    checked: boolean;
    onChange: () => void;
}) => {
    return (
        <ContentWrapper>
            <Container className="flex items-center gap-3">
                <Radio
                    value="new"
                    checked={checked}
                    onChange={onChange}
                />
                <Text tone="primary" variant="action-label">
                    {text}
                </Text>
            </Container>
        </ContentWrapper>
    );
};
