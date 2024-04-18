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
  actionConfirm: () => void;
  isOpen: boolean;
  actionCLose: () => void;
}

export function Modal(props: ModalProps) {
  return (
    <Fragment>
      {props.isOpen && (
        <ModalStyled>
          <ModalDialog>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>{props.title}</ModalTitle>
                <ButtonClose
                  type='button'
                  onClick={props.actionCLose}
                ></ButtonClose>
              </ModalHeader>
              <ModalBody>
                {props.children} ?? <Fragment />
              </ModalBody>
              <ModalFooter>
                <ModalButton
                  type='button'
                  mode='cancel'
                  onClick={props.actionCLose}
                >
                  Cancelar
                </ModalButton>
                <ModalButton
                  type='button'
                  mode='confirm'
                  onClick={props.actionConfirm}
                >
                  {props.textButtonConfirm}
                </ModalButton>
              </ModalFooter>
            </ModalContent>
          </ModalDialog>
        </ModalStyled>
      )}
    </Fragment>
  );
}
