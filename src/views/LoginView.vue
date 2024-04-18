<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <img src="/mariana.jpg"
                    class="absolute inset-0 h-full w-full object-cover opacity-80" />
            </section>

            <main
                class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div class="max-w-xl lg:max-w-3xl">
                    <div class="mx-auto max-w-lg text-center">
                        <h1 class="text-2xl font-bold sm:text-3xl">Iniciar sesión</h1>

                        <p class="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error
                            neque
                            ipsa culpa autem, at itaque nostrum!
                        </p>
                    </div>

                    <form action="#" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label for="email" class="sr-only">Email</label>

                            <div class="relative">
                                <input type="email"
                                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email" />

                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" class="sr-only">Password</label>

                            <div class="relative">
                                <input type="password"
                                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password" />

                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <p class="text-sm text-gray-500">
                                No Tienes cuenta?
                                <router-link to="/" class="underline">Atras</router-link>
                            </p>

                            <button type="submit"
                                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                                Sign in
                            </button>
                        </div>
                    </form>

                </div>
            </main>
        </div>
    </section>
</template>