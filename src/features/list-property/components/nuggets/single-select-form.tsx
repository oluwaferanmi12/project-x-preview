import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import { ContentWrapper } from "./content-wrapper";
import { Radio } from "@/components/common/radio/radio";

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
