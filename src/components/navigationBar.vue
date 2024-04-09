<!--封装顶部导航栏-->
<template fixed="true">
    <var-app-bar title="标题">
        <template #left>
            <var-button color="transparent" text-color="#fff" round text>
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
            <var-menu>
                <var-button color="transparent" text-color="#fff" round text>
                    <var-icon name="menu" :size="24" />
                </var-button>

                <template #menu>
                    <var-cell ripple>选项卡</var-cell>
                    <var-cell ripple>选项卡</var-cell>
                    <var-cell ripple>选项卡</var-cell>
                </template>
            </var-menu>
        </template>
    </var-app-bar>
</template>
