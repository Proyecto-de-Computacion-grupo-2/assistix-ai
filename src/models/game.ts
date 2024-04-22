export class Game {
    id_game: number;
    id_gw: number;
    id_mundo_deportivo: number;
    schedule: string;
    game_week: number;
    team: string;
    opposing_team: string;
    mixed: number;
    as_score: number;
    marca_score: number;
    mundo_deportivo_score: number;
    sofa_score: number;
    current_value: number;
    points: number;
    average: number;
    matches: number;
    goals_metadata: number;
    cards: number;
    yellow_card: number;
    double_yellow_card: number;
    red_card: number;
    total_passes: number;
    accurate_passes: number;
    total_long_balls: number;
    accurate_long_balls: number;
    total_cross: number;
    accurate_cross: number;
    total_clearance: number;
    clearance_off_line: number;
    aerial_lost: number;
    aerial_won: number;
    duel_lost: number;
    duel_won: number;
    dispossessed: number;
    challenge_lost: number;
    total_contest: number;
    won_contest: number;
    good_high_claim: number;
    punches: number;
    error_lead_to_a_shot: number;
    error_lead_to_a_goal: number;
    shot_off_target: number;
    on_target_scoring_attempt: number;
    hit_woodwork: number;
    blocked_scoring_attempt: number;
    outfielder_block: number;
    big_chance_created: number;
    big_chance_missed: number;
    penalty_conceded: number;
    penalty_won: number;
    penalty_miss: number;
    penalty_save: number;
    goals: number;
    own_goals: number;
    saved_shots_from_inside_the_box: number;
    saves: number;
    goal_assist: number;
    goals_against: number;
    goals_avoided: number;
    interception_won: number;
    total_interceptions: number;
    total_keeper_sweeper: number;
    accurate_keeper_sweeper: number;
    total_tackle: number;
    was_fouled: number;
    fouls: number;
    total_offside: number;
    minutes_played: number;
    touches: number;
    last_man_tackle: number;
    possession_lost_control: number;
    expected_goals: number;
    goals_prevented: number;
    key_pass: number;
    expected_assists: number;
    ts: Date;

    constructor(
        id_game: number = 0,
        id_gw: number = 0,
        id_mundo_deportivo: number = 0,
        schedule: string = "",
        game_week: number = 0,
        team: string = "",
        opposing_team: string = "",
        mixed: number = 0,
        as_score: number = 0,
        marca_score: number = 0,
        mundo_deportivo_score: number = 0,
        sofa_score: number = 0,
        current_value: number = 0,
        points: number = 0,
        average: number = 0,
        matches: number = 0,
        goals_metadata: number = 0,
        cards: number = 0,
        yellow_card: number = 0,
        double_yellow_card: number = 0,
        red_card: number = 0,
        total_passes: number = 0,
        accurate_passes: number = 0,
        total_long_balls: number = 0,
        accurate_long_balls: number = 0,
        total_cross: number = 0,
        accurate_cross: number = 0,
        total_clearance: number = 0,
        clearance_off_line: number = 0,
        aerial_lost: number = 0,
        aerial_won: number = 0,
        duel_lost: number = 0,
        duel_won: number = 0,
        dispossessed: number = 0,
        challenge_lost: number = 0,
        total_contest: number = 0,
        won_contest: number = 0,
        good_high_claim: number = 0,
        punches: number = 0,
        error_lead_to_a_shot: number = 0,
        error_lead_to_a_goal: number = 0,
        shot_off_target: number = 0,
        on_target_scoring_attempt: number = 0,
        hit_woodwork: number = 0,
        blocked_scoring_attempt: number = 0,
        outfielder_block: number = 0,
        big_chance_created: number = 0,
        big_chance_missed: number = 0,
        penalty_conceded: number = 0,
        penalty_won: number = 0,
        penalty_miss: number = 0,
        penalty_save: number = 0,
        goals: number = 0,
        own_goals: number = 0,
        saved_shots_from_inside_the_box: number = 0,
        saves: number = 0,
        goal_assist: number = 0,
        goals_against: number = 0,
        goals_avoided: number = 0,
        interception_won: number = 0,
        total_interceptions: number = 0,
        total_keeper_sweeper: number = 0,
        accurate_keeper_sweeper: number = 0,
        total_tackle: number = 0,
        was_fouled: number = 0,
        fouls: number = 0,
        total_offside: number = 0,
        minutes_played: number = 0,
        touches: number = 0,
        last_man_tackle: number = 0,
        possession_lost_control: number = 0,
        expected_goals: number = 0,
        goals_prevented: number = 0,
        key_pass: number = 0,
        expected_assists: number = 0,
        ts: Date = new Date()
    ) {
        this.id_game = id_game;
        this.id_gw = id_gw;
        this.id_mundo_deportivo = id_mundo_deportivo;
        this.schedule = schedule;
        this.game_week = game_week;
        this.team = team;
        this.opposing_team = opposing_team;
        this.mixed = mixed;
        this.as_score = as_score;
        this.marca_score = marca_score;
        this.mundo_deportivo_score = mundo_deportivo_score;
        this.sofa_score = sofa_score;
        this.current_value = current_value;
        this.points = points;
        this.average = average;
        this.matches = matches;
        this.goals_metadata = goals_metadata;
        this.cards = cards;
        this.yellow_card = yellow_card;
        this.double_yellow_card = double_yellow_card;
        this.red_card = red_card;
        this.total_passes = total_passes;
        this.accurate_passes = accurate_passes;
        this.total_long_balls = total_long_balls;
        this.accurate_long_balls = accurate_long_balls;
        this.total_cross = total_cross;
        this.accurate_cross = accurate_cross;
        this.total_clearance = total_clearance;
        this.clearance_off_line = clearance_off_line;
        this.aerial_lost = aerial_lost;
        this.aerial_won = aerial_won;
        this.duel_lost = duel_lost;
        this.duel_won = duel_won;
        this.dispossessed = dispossessed;
        this.challenge_lost = challenge_lost;
        this.total_contest = total_contest;
        this.won_contest = won_contest;
        this.good_high_claim = good_high_claim;
        this.punches = punches;
        this.error_lead_to_a_shot = error_lead_to_a_shot;
        this.error_lead_to_a_goal = error_lead_to_a_goal;
        this.shot_off_target = shot_off_target;
        this.on_target_scoring_attempt = on_target_scoring_attempt;
        this.hit_woodwork = hit_woodwork;
        this.blocked_scoring_attempt = blocked_scoring_attempt;
        this.outfielder_block = outfielder_block;
        this.big_chance_created = big_chance_created;
        this.big_chance_missed = big_chance_missed;
        this.penalty_conceded = penalty_conceded;
        this.penalty_won = penalty_won;
        this.penalty_miss = penalty_miss;
        this.penalty_save = penalty_save;
        this.goals = goals;
        this.own_goals = own_goals;
        this.saved_shots_from_inside_the_box = saved_shots_from_inside_the_box;
        this.saves = saves;
        this.goal_assist = goal_assist;
        this.goals_against = goals_against;
        this.goals_avoided = goals_avoided;
        this.interception_won = interception_won;
        this.total_interceptions = total_interceptions;
        this.total_keeper_sweeper = total_keeper_sweeper;
        this.accurate_keeper_sweeper = accurate_keeper_sweeper;
        this.total_tackle = total_tackle;
        this.was_fouled = was_fouled;
        this.fouls = fouls;
        this.total_offside = total_offside;
        this.minutes_played = minutes_played;
        this.touches = touches;
        this.last_man_tackle = last_man_tackle;
        this.possession_lost_control = possession_lost_control;
        this.expected_goals = expected_goals;
        this.goals_prevented = goals_prevented;
        this.key_pass = key_pass;
        this.expected_assists = expected_assists;
        this.ts = ts;
    }
}
