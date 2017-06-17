# Oquonie

Oquonie is a textless puzzle game for iPad and iPhone created in collaboration with illustrator Rekka Bellum where you must find your way across an intertwined megastructure. You will not be alone, your incarnations will have the help of bizaroid characters speaking an obscure language.

Feel free to send pull requests if you find an issue that you wish to correct.

## Build

### Build Linux64

```
electron-packager . Oquonie --platform=linux --arch=x64 --out /xxiivv/Nataniev/public/public.projects/builds --overwrite --electron-version=1.6.2
```

### Archive Darwin64
```
zip -r /xxiivv/Nataniev/public/public.projects/builds/oquonie_lin64.zip /xxiivv/Nataniev/public/public.projects/builds/Oquonie-linux-x64/
```

### Build Darwin64
```
electron-packager . Oquonie --platform=darwin --arch=x64 --out /xxiivv/Nataniev/public/public.projects/builds --overwrite --electron-version=1.6.2
```

### Archive Darwin64
```
zip -r /xxiivv/Nataniev/public/public.projects/builds/oquonie_osx64.zip /xxiivv/Nataniev/public/public.projects/builds/Oquonie-darwin-x64/
```

### Build Windows64
```
electron-packager . Oquonie --platform=win32 --arch=x64 --out /xxiivv/Nataniev/public/public.projects/builds --overwrite --electron-version=1.6.2
```

### Archive Windows64
```
zip -r /xxiivv/Nataniev/public/public.projects/builds/oquonie_win64.zip /xxiivv/Nataniev/public/public.projects/builds/Oquonie-win32-x64/
```

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (CC).
