"use client";

import { PencilToSquare } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import UpdateBtn from "./UpdateBtn";
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdateFunc = async (formData) => {
        const { name, photoURL } = formData;

        const { data, error } = await authClient.updateUser({
            image: photoURL,
            name: name,
        });

        if(error) {
            toast.error(error.message);
        };

        if(data) {
            toast.success('Profile update successful!');
        };
    };

    return (
        <Modal>
            <UpdateBtn />

            <Modal.Backdrop>
                <Modal.Container placement="auto">

                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <PencilToSquare className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    className="flex flex-col gap-4"
                                    onSubmit={handleSubmit(handleUpdateFunc)}
                                >
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input
                                            placeholder="Enter your name"
                                            {...register('name', { required: 'Name feild is required' })} 
                                        />
                                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                    </TextField>
                                    <TextField className="w-full" name="email" type="url">
                                        <Label>Photo URL</Label>
                                        <Input
                                            placeholder="Enter your photo URL address"
                                            {...register('photoURL', { required: 'Photo URL feild is required' })} 
                                        />
                                        {errors.photoURL && <p className="text-red-500">{errors.photoURL.message}</p>}
                                    </TextField>

                                    <Modal.Footer className='mt-5'>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot='close' type='submit'>Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateProfile;