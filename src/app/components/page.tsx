import { Container } from "@/components/common/container/container";
import { Input } from "@/components/common/input/input";
import EyeClosed from "@/assets/svgs/eye-closed.svg";
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
          rightIcon={<EyeOpened className="text-secondary" />}
          passwordToggle
          showPasswordIcon={<EyeOpened className="text-secondary" />}
          hidePasswordIcon={<EyeClosed className="text-secondary" />}
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
            variant="p300"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="s300"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="sc300"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="d300"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="w300"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="p300"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="s300"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="sc300"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="d300"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="w300"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="p300"
          >
            Label
          </Button>
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="s300"
          >
            Label
          </Button>
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="sc300"
          >
            Label
          </Button>
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="d300"
          >
            Label
          </Button>
          <Button
            shorter
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="w300"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="p300"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="s300"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="sc300"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="d300"
          >
            Label
          </Button>
          <Button
            rightIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="w300"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="p300"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="s300"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="sc300"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="d300"
          >
            Label
          </Button>
          <Button
            shorter
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="w300"
          >
            Label
          </Button>
        </Container>
        <Container className="flex items-center gap-2 mt-4">
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="p300"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="s300"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="sc300"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="d300"
          >
            Label
          </Button>
          <Button
            leftIcon={<WalletIcon className="text-secondary" />}
            as="button"
            variant="w300"
          >
            Label
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default Components;
