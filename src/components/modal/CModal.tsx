import { MouseEventHandler } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import CButton from "../button/CButton";

type modalPropType = {
  modalHeader: string;
  modalBody: string;
  modalFooterButtonCaption?: string;
  modalFooterButtonFunction?: MouseEventHandler;
  //   modalFooterButtonCaption2?: string;
  //   modalFooterButtonFunction2?: MouseEventHandler;
  isopen: boolean;
  ismodalFooterButtonVisible?: boolean;
  toggle: MouseEventHandler;
  color: string;
};

const CModal = (prop: modalPropType) => {
  return (
    <Modal color={prop.color} isOpen={prop.isopen} toggle={prop.toggle}>
      <ModalHeader>{prop.modalHeader}</ModalHeader>
      <ModalBody>{prop.modalBody}</ModalBody>
      <ModalFooter>
        <CButton
          caption="cancel"
          color="secondary"
          onclick={prop.toggle}
        ></CButton>
        {prop.ismodalFooterButtonVisible && (
          <CButton
            caption={
              prop.modalFooterButtonCaption ? prop.modalFooterButtonCaption : ""
            }
            color={prop.color}
            onclick={
              prop.modalFooterButtonFunction
                ? prop.modalFooterButtonFunction
                : () => {
                    {
                    }
                  }
            }
          ></CButton>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default CModal;
