<template>
  <div>
    <button @click="increment()">increment</button>
    <h2>オブジェクトをreactiveでラップしたもの: {{ sampleObjectState.count }}</h2>
    <h2>スプレッド構文を使ってリアクティブを失わさせる: {{ count }}</h2>
    <h2>プリミティブな値をrefでラップして返したもの: {{ samplePrimitiveState }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSampleObjectState } from '../src/state/SampleObjectState';
import { useSamplePrimitiveState } from '../src/state/SamplePrimtiveState';

export default defineComponent({
  name: 'App',
  setup() {
    const sampleObjectState = useSampleObjectState();

    // NOTE: スプレッド構文を使ってわざとreactiveから外す
    let { count } = useSampleObjectState();

    const samplePrimitiveState = useSamplePrimitiveState();

    const increment = () => {
      sampleObjectState.count++;
      count++;
      samplePrimitiveState.value++;
    }

    return { 
      sampleObjectState,
      count,
      samplePrimitiveState,
      increment
    };
  }
});
</script>
