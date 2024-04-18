import { Fragment } from "react/jsx-runtime";
import { Modal as ModalStyled } from "../style/modal/Modal";
import { ModalDialog } from "../style/modal/ModalDialog";
import { ModalContent } from "../style/modal/ModalContent";
import { ModalHeader } from "../style/modal/ModalHeader";
import { ModalTitle } from "../style/modal/ModalTitle";
import { ButtonClose } from "../style/modal/ButtonClose";
import { ModalBody } from "../style/modal/ModalBody";
import { ModalFooter } from "../style/modal/ModalFooter";
import { ModalButton } from "../style/modal/ModalButton";

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  textButtonConfirm: string;
}

export function Modal(props: ModalProps) {
  return (
    <Fragment>
      <ModalStyled>
        <ModalDialog>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{props.title}</ModalTitle>
              <ButtonClose type='button'></ButtonClose>
            </ModalHeader>
            <ModalBody>
              {props.children} ?? <Fragment />
            </ModalBody>
            <ModalFooter>
              <ModalButton type='button' mode='cancel'>
                Cancelar
              </ModalButton>
              <ModalButton type='button' mode='confirm'>
                {props.textButtonConfirm}
              </ModalButton>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </ModalStyled>
    </Fragment>
  );
}
