import { ref } from 'vue';

export function useSamplePrimitiveState() {
    const count = ref(0);
    return count;
}
