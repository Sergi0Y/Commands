# MONGODB

## Buscar mas de un "username"

```
{$or:[{username: 'gmorales'},{username: 'rserrano'}]}
```
## Buscar Campo existente/inexistente

```
{field: {$exists:'value'}}
```
```
{client: {$exists:true}}
```
```
{client: {$exists:false}}
```
## Campo si es igual/distinto a
```
{field: {$eq/$ne:'value'}}
```
```
{client: {$eq:'Rucaray'}}
```
```
{client: {$ne:'Rucaray'}}
```

## Buscar mas de un "valor"
```
{$or:[{field: 'value'},{field: 'value'}]}
```

```
{$or:[{username: 'gmorales'},{username: 'rserrano'}]}
```



gt/gte
lt/lte