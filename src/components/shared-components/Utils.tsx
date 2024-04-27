export function format_player_value(player_value: number | string) {
    return typeof player_value === 'number' ? player_value.toLocaleString('de-DE') + ' €' : player_value + ' €';
}
export function format_position(position: number) {
    switch (position) {
        case 1:
            return 'PT';
        case 2:
            return 'DF';
        case 3:
            return 'MC';
        case 4:
            return 'DL';
        default:
            return 'N/A';
    }
}