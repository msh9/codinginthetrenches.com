﻿get-childitem -Path .\ -Filter *.png -Recurse -Name | ForEach-Object { optipng -o4 $_ }