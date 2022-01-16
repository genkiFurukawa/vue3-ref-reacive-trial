import { reactive } from 'vue';

export function useSampleObjectState() {
    const state = reactive({
        count: 0
    });

    return state;
}
