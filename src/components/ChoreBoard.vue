<script setup lang="ts">
import type { Chore, DragDropChore, DragEvent, StateChore } from '~/types';
import draggable from 'vuedraggable';
const { chores: data } = (await useFetchChores()) ?? { chores: [] }
const { updateChore } = useUpdateChore()
const chores = reactive<DragDropChore[]>(data)

// const pomocount = inject<number>('countPomo')

// watch({ pomocount }, () => {
//     console.log(pomocount)
// })

const handlerStatus = (event: DragEvent, status: StateChore) => {
    if (event.added?.element === undefined) return
    const chore = event.added.element as Chore
    chore.status = status
    updateChore({ ...chore, status }, "status")
}
</script>
<template>
    <div flex="~ col"
        class="w-full"
        items-center
        justify-center
        gap-1
        md:gap-4>
        <template v-for="card in chores"
            :key="card.id">
            <div w-full
                h-40
                bg-mountain-900
                md:gap-4
                rounded-lg
                mt-1
                p-2
                m-2
                gap-2
                overflow-y-auto
                class="scroll-card"
                cursor-grab>
                <p font-bold
                    :class="`${card.status}`">{{ card.title.toUpperCase() }}</p>
                <draggable class="card-drag"
                    v-model="card.chores"
                    :group="{ name: 'chores', pull: true }"
                    item-key="id"
                    :animation="150"
                    @change="handlerStatus($event as DragEvent, card.status as StateChore)">
                    <template #item="{ element: chore }: { element: Chore }"
                        :animation="150">
                        <ChoreCard m-0
                            pointer
                            :chore="chore" />
                    </template>
                </draggable>
            </div>
        </template>
    </div>
</template>
<style scoped>
.scroll-card::-webkit-scrollbar {
    width: 0.5em;
}

.scroll-card::-webkit-scrollbar-thumb {
    background: #D0FBE8;
    border-radius: 1em;  
}
.scroll-card::-webkit-scrollbar-thumb:hover {
  background: #007C63; 
}

.card-drag {
    --uno: flex flex-wrap min-width-3 gap-1 w-full min-height-80;
}

.new {
    --uno: color-coral;
}

.in-process {
    --uno: color-golden;
}

.done {
    --uno: color-black;
}
</style>