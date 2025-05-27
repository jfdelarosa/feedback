<script lang="ts" setup>
import { Field } from 'vee-validate';
import { z } from "zod";
import { auth } from "@/lib/auth";
import { useAuthStore } from "@/stores/auth";
import { toast } from 'vue-sonner'

useSeoMeta({ title: "Sign up", description: "Create an account to get started." });

const isSubmitting = ref(false)
const authStore = useAuthStore();

definePageMeta({
    layout: 'full'
})

const { handleSubmit, errors } = useForm({
    validationSchema: toTypedSchema(
        z.object({
            name: z
                .string({
                    required_error: "Name is required",
                })
                .min(4, "Name must be at least 4 characters"),
            email: z
                .string({
                    required_error: "Email is required",
                })
                .email("Email must be a valid email"),
            password: z
                .string()
                .min(6, "Password must be at least 6 characters"),
        })
    ),
});

const submit = handleSubmit(async (values) => {
    if (isSubmitting.value) {
        return
    }

    try {
        isSubmitting.value = true;

        // First reset auth store to clear any previous state
        authStore.reset();

        const response = await auth.signUp.email({
            email: values.email,
            password: values.password,
            name: values.name
        })

        if (response.error) {
            throw new Error(response.error.message)
        }

        toast("Account created!", {
            description: "You have successfully created an account.",
        });

        // Navigate to onboarding
        navigateTo('/welcome', { external: true });
    } catch (error) {
        console.error(error)

        toast("Error creating account", {
            description: error instanceof Error ? error.message : "Please try again.",
        });
    } finally {
        isSubmitting.value = false;
    }
});
</script>

<template>
    <form class="card bg-white shadow-xl max-w-sm w-full" @submit="submit">
        <div class="card-body">
            <div class="card-header">
                <h2 class="card-title">
                    Sign up
                </h2>
                <p class="text-sm">Create an account to get started.</p>
            </div>

            <fieldset class="fieldset">
                <legend class="fieldset-legend">Name</legend>

                <Field class="input input-bordered w-full" required label="Name" name="name" placeholder="John Doe" />
            </fieldset>


            <fieldset class="fieldset">
                <legend class="fieldset-legend">Email</legend>

                <Field class="input input-bordered w-full" required label="Email" type="email" name="email"
                    placeholder="john@example.com" />
            </fieldset>

            <fieldset class="fieldset">
                <legend class="fieldset-legend">Password</legend>

                <Field class="input input-bordered w-full" required label="Password" type="password" name="password" />
            </fieldset>

            <div class="card-actions justify-between items-center">
                <NuxtLink class="btn btn-ghost" to="/sign-in">
                    Sign in
                </NuxtLink>

                <button class="btn btn-primary" type="submit">Get Started</button>
            </div>
        </div>
    </form>
</template>