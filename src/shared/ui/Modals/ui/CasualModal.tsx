import { Modal, ModalProps, Text } from '@mantine/core';

export default function CasualModal(props: ModalProps) {
    const { children, title, ...modalProps } = props;

    return (
        <Modal.Root {...modalProps}>
            <Modal.Overlay />
            <Modal.Content>
                <Modal.Header>
                    {!!title && (
                        <Modal.Title>
                            <Text fw={700}>{title}</Text>
                        </Modal.Title>
                    )}
                    <Modal.CloseButton />
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
}
