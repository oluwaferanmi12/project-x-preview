import { Container } from "@/components/common/container/container";
import { useListingScreen } from "../hooks/useListingScreen";
import { Text } from "@/components/common/text/text";
import { ListingNavigation } from "../components/listing-navigation";
import { Col, Row } from "antd";

function ListPropertyScreen() {
  const { formData, updateForm } = useListingScreen();
  return (
    <Row gutter={16} className="h-[calc(100vh-10rem)] ">
      <Col xs={6}>
        <ListingNavigation />
      </Col>
      <Col xs={18}>
        <Container className="relative bg-surface w-full h-full rounded-xl px-5 py-12">
          <Text>Testing here</Text>
        </Container>
      </Col>
    </Row>
  );
}

export default ListPropertyScreen;
