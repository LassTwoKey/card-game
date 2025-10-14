import { Modal as MantineModal, ModalProps, Text } from '@mantine/core';

export default function Modal(props: ModalProps) {
    const { children, title, ...modalProps } = props;

    return (
        <MantineModal.Root {...modalProps}>
            <MantineModal.Overlay />
            <MantineModal.Content>
                <MantineModal.Header>
                    {!!title && (
                        <MantineModal.Title>
                            <Text fw={700}>{title}</Text>
                        </MantineModal.Title>
                    )}
                    <MantineModal.CloseButton />
                </MantineModal.Header>
                <MantineModal.Body>{children}</MantineModal.Body>
            </MantineModal.Content>
        </MantineModal.Root>
    );
}
