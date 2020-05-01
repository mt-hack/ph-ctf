$sb = [System.Text.StringBuilder]::new("PH{")
for ($i = 0; $i -lt 30; $i++) {
    $char = [System.Text.Encoding]::UTF8.GetChars((Get-Random -Minimum 100 -Maximum 150))
    $sb.Append($char) > $null
}
"PH{P0werShe!!_is_aWEs0me}" > $null
$sb.Append('}')
Write-Host ($sb.ToString())