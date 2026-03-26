import { Container } from "@/components/common/container/container";
import { Input } from "@/components/common/input/input";
import EyeOpened from "@/assets/svgs/eye-opened.svg";
import Button from "@/components/common/button/button";
import WalletIcon from "@/assets/svgs/wallet.svg";

function Components() {
  return (
    <>
      <Container className="bg-background h-screen min-h-screen p-8">
        <Input label="Title" placeholder="Enter title" />
        <Input
          type="password"
          label="Title"
          placeholder="Enter title"
        />
        <Input
          label="Title"
          placeholder="Enter title"
          rightIcon={<EyeOpened className="text-secondary" />}
        />
        <Container className="flex items-center gap-2">
          <Button
            shorter
            leftIcon={<WalletIcon className="text-[red]" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="primary"
            loading
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="secondary"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="success"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="danger"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="warning"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="transparent"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="disabled"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="disabledTransparent"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            shorter
            leftIcon={<WalletIcon className="text-[red]" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="primary"
            loading
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="secondary"
            loading
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="success"
            loading
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="danger"
            loading
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="warning"
            loading
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="transparent"
            loading
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="disabled"
            
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="disabledTransparent"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="primary"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="secondary"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="success"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="danger"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="warning"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="transparent"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="primary"
          >
            Label
          </Button>
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="secondary"
          >
            Label
          </Button>
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="success"
          >
            Label
          </Button>
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="danger"
          >
            Label
          </Button>
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="warning"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="transparent"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="primary"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="secondary"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="success"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="danger"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="warning"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="transparent"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="primary"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="secondary"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="success"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="danger"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="warning"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="primary"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="secondary"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="success"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="danger"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="warning"
          >
            Label
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default Components;
