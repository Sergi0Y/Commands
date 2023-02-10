# MONGODB

# Buscar mas de un "username"
```
{$or:[{username: 'gmorales'},{username: 'rserrano'}]}
```
```
{client: {$exists:false}}
```
```
{client: {$eq:'Rucaray'}}
```

gt/gte
lt/lte