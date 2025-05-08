import { Icon } from "@iconify-icon/react";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
};

export default function SubmitButton({ children, isLoading }: Readonly<Props>) {
  return (
    <Button>
      {isLoading ? <Icon icon="eos-icons:three-dots-loading" /> : children}
    </Button>
  );
}
