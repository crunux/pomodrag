<script setup lang="ts">
    import type { Chore, DragDropChore, DragEvent, StateChore } from '~/types';
    import draggable from 'vuedraggable';
    const { chores: data } = (await useFetchChores()) ?? { chores: [] }
    const user = useSupabaseUser()
    const { updateChore } = useUpdateChore()
    const chores = ref<DragDropChore[]>(data)
  

    const handlerStatus = (event: DragEvent ,status: StateChore) => {
        if(event.added?.element === undefined) return
        const chore = event.added.element as Chore
        chore.status = status
        updateChore({ ...chore, status }, "status")
    }
</script>
<template>
    <div flex="~ col" class="md:w-full" items-center justify-center gap-1 md:gap-4>
        <!-- <draggable v-model="chores" group="chores" item-key="id" flex="~ col" gap-4 overflow-x-auto items-start>
            <template #item="{element: card }: {element: DragDropChore}"> -->
                <template v-show="!user" v-for="card in chores" :key="card.id" >
                    <div w-92 md:w-full h-40 bg-mountain-400 md:gap-4 rounded-lg p-2 m-2 gap-2 cursor-grab>
                        <p font-bold :class="card.status">{{ card.title.toUpperCase() }}</p>
                        <draggable min-w-10 v-model="card.chores" :group="{name: 'chores', pull: true}" item-key="id" :animation="150" @change="handlerStatus($event as DragEvent, card.status as StateChore)">
                            <template #item="{element: chore }: { element: Chore}" :animation="150">
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
    --uno: color-black;
}
</style>