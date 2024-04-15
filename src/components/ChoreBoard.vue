<script setup lang="ts">
import type { Chore, DragDropChore, DragEvent, StateChore } from '~/types';
import draggable from 'vuedraggable';
// const { chores } = (await useFetchChores()) ?? { chores: [] }

const chores = ref<DragDropChore[]>([
            { id: 0, title: "to do", status: 'new', chores: [{
                    id: 24,
                    created_at: '2024-04-12T04:09:38.446+00:00',
                    content: 'test',
                    status: 'new',
                    pomo: 0,
                    userId: '0071022a-3480-433d-88bc-eefa5418df0a'
                },
                {
                    id: 13,
                    created_at: '2024-04-12T04:09:38.446+00:00',
                    content: 'test2',
                    status: 'new',
                    pomo: 0,
                    userId: '0071022a-3480-433d-88bc-sdfbjsdbfh'
                }]
            },
            { id: 1, title: "in process", status: 'in-process', chores: [{
                    id: 29,
                    created_at: '2024-04-12T10:25:35.704+00:00',
                    content: 'afro love',
                    status: 'in-process',
                    pomo: 2,
                    userId: '0071022a-3480-433d-88bc-eefa5418df0a'
                }]
            },
            { id: 2, title: "done", status: 'done', chores: [{
                    id: 23,
                    created_at: '2024-04-12T10:25:35.704+00:00',
                    content: 'i make to bet',
                    status: 'done',
                    pomo: 1,
                    userId: '0071022a-3480-433d-88bc-f8wf8sd89'
                }]
            },
        ])
// const { updateChore } = useUpdateChore()

const handlerStatus = (event: DragEvent ,status: StateChore) => {
    if(event.added?.element === undefined) return
    const chore = event.added.element as Chore
    console.log(event);
    chore.status = status
    // updateChore({ ...chore, status })
}

const log  = (event: DragEvent) => {
    console.log(event)
}
</script>
<template>
    <div flex="~ col" class="md:w-full" items-center justify-center gap-1 md:gap-4>
        <!-- <draggable v-model="chores" group="chores" item-key="id" flex="~ col" gap-4 overflow-x-auto items-start>
            <template #item="{element: card }: {element: DragDropChore}"> -->
                <template v-for="card in chores" :key="card.id" >
                    <div w-92 md:w-full h-40 bg-mountain-50 md:gap-4 rounded-md p-2 m-2 gap-2 cursor-grab>
                        <p font-bold :class="card.status">{{ card.title.toUpperCase() }}</p>
                        <draggable v-model="card.chores" :group="{name: 'chores', pull: true}" item-key="id" :animation="150" @change="handlerStatus($event as DragEvent, card.status as StateChore)">
                            <template #item="{element: chore }: { element: Chore}" :animation="150" >
                                <ChoreCard m-0 pointer :chore="chore" />
                            </template>
                        </draggable>
                    </div>  
                </template>
            <!-- </template>
            
        </draggable> -->
    </div>
</template>
<style scoped>
.new{
    --uno: color-coral;
}

.in-process{
    --uno: color-golden;
}

.done{
    --uno: color-mountain-400;
}
</style>