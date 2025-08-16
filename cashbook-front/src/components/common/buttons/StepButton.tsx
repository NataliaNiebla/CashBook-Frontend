import { Button } from "../../ui/button";
import {Text} from "../../ui/text";

interface StepButtonProps {
    children?: React.ReactNode;
    text?: string;
    }

function StepButton({ text }: StepButtonProps) {
  return (
    <Button size='lg' variant="solid" action="primary" >
        <Text size="smButton" type="whiteText">{text}</Text>
      </Button>
  );
}

export default StepButton;