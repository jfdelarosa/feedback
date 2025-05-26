<script lang="ts" setup>
import { Field, ErrorMessage } from 'vee-validate';
import { z } from "zod";
import { auth } from "@/lib/auth";
import { toast } from 'vue-sonner'

useSeoMeta({
    title: "Log in",
    description: "Enter your email & password to log in or continue with Google or Facebook.",
});

const errorMessage = ref("")
const isSubmitting = ref(false)

definePageMeta({
    layout: 'full'
})

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
        z.object({
            email: z
                .string({
                    required_error: "Email is required",
                })
                .email("Email must be a valid email"),
            password: z
                .string({
                    required_error: "Password is required",
                })
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
        errorMessage.value = ""; // Clear any previous errors

        const response = await auth.signIn.email({
            email: values.email,
            password: values.password
        })

        if (response.error) {
            throw new Error(response.error.message)
        }

        toast("Logged in successfully!", {
            description: "You have successfully logged in.",
        });

        // Navigate to the home page after successful login
        navigateTo('/app', { external: true })
    } catch (error) {
        console.error(error)
        errorMessage.value = error instanceof Error ? error.message : "Invalid email or password. Please try again.";

        toast("Login failed", {
            description: error instanceof Error ? error.message : "Please check your credentials and try again.",
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
                    Sign in
                </h2>
                <p class="text-sm">Enter your email & password to log in.</p>
            </div>

            <ErrorMessage name="email" />
            <ErrorMessage name="password" />

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
                <NuxtLink class="btn btn-ghost" to="/sign-up">
                    Sign up
                </NuxtLink>

                <button class="btn btn-primary" type="submit">Sign in</button>
            </div>
        </div>
    </form>
</template>