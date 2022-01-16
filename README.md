# ref()とreactive()の使い分け動作確認

## 概要
- ref()とreactive()の使い分けについて
- => オブジェクトの時はreactive()、プリミティブの時はref()を使う
    - オブジェクト型のものをスプレッド構文などでばらすとreactiveが失われる
    - 返り値をtoRefs()でラップしてやれば回避可能

## 参考
- [Vue.jsのcomposition-apiにおける"ref"と"reactive"って何が違うの？](https://qiita.com/mgr/items/a5e35636d371969e0a4d)
- 公式見解
    - なるべくreactiveを使うようにしながら、toRefs()を使うようにすれば、精神的負担も少ないのでは？
    ```
    1.Use ref and reactive just like how you'd declare primitive type variables and object variables in normal JavaScript. It is recommended to use a type system with IDE support when using this style.

    2.Use reactive whenever you can, and remember to use toRefs when returning reactive objects from composition functions. This reduces the mental overhead of refs but does not eliminate the need to be familiar with the concept.
    ```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
