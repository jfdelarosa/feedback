<template>
    <div>
        <div class="card shadow shadow-base-200 bg-white col-span-3">
            <div class="card-body">
                <h2 class="card-title text-secondary text-base">
                    General
                </h2>


                <div class="grid grid-cols-2 gap-2">
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Project Name</legend>
                        <input type="text" class="input" placeholder="Type here" value="My Project" />
                    </fieldset>

                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Project Key</legend>
                        <input readonly type="text" class="input input-bordered w-full"
                            value="f9475d9f-c4f4-41b7-9531-c92b7525d262" />
                    </fieldset>
                </div>

            </div>
        </div>
    </div>
</template>