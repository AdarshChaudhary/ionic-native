import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface ScoreData {
  /**
   * The score to submit.
   */
  score: number;

  /**
   * The leaderboard ID from Google Play Developer console.
   */
  leaderboardId: string;
}

export interface PlayerScoreData {
  /**
   * The player score.
   */
  playerScore: number;
}

export interface LeaderboardData {
  /**
   * The leaderboard ID from Goole Play Developer console.
   */
  leaderboardId: string;
}

export interface AchievementData {
  /**
   * The achievement ID from Google Play Developer console.
   */
  achievementId: string;
}

export interface IncrementableAchievementData extends AchievementData {
  /**
   * The amount to increment the achievement by.
   */
  numSteps: number;
}

export interface SignedInResponse {
  /**
   * True or false is the use is signed in.
   */
  isSignedIn: boolean;
}

export interface Player {
  /**
   * The players display name.
   */
  displayName: string;

  /**
   * The ID given to the player by Play Games Services.
   */
  playerId: string;

  /**
   * The title of the player based on their gameplay activity. Not
   * all players have this and it may change over time.
   */
  title: string | null;

  /**
   * Retrieves the URI for loading this player's icon-size profile image.
   * Returns null if the player has no profile image.
   */
  iconImageUrl: string;

  /**
   * Retrieves the URI for loading this player's hi-res profile image. Returns
   * null if the player has no profile image.
   */
  hiResIconImageUrl: string;
}

export interface SubmittedScoreData {
  /**
   * The leaderboard ID from Goole Play Developer console.
   */
  leaderboardId: string;

  /**
   * The player ID from Goole Play Developer console.
   */
  playerId: string;

  /**
   * The score data in a display-appropriate format.
   */
  formattedScore: string;

  /**
   * Whether or not this score was the player's new best score.
   */
  newBest: boolean;

  /**
   * The raw score value of this score result.
   */
  rawScore: number;

  /**
   * The score tag associated with this result, if any.
   */
  scoreTag: string;
}

/**
 * @name Google Play Games Services
 * @description
 * A Cordova plugin that let's you interact with Google Play Games Services.
 *
 * @usage
 * ```typescript
 * import { GooglePlayGamesServices } from '@ionic-native/google-play-games-services/ngx';
 *
 *
 * constructor(private googlePlayGamesServices: GooglePlayGamesServices) { }
 *
 * ...
 *
 * // Authenticate with Play Games Services
 * this.googlePlayGamesServices.auth()
 *     .then(() => console.log('Logged in to Play Games Services'))
 *     .catch(e) => console.log('Error logging in Play Games Services', e);
 *
 * // Sign out of Play Games Services.
 * this.googlePlayGamesServices.signOut()
 *     .then(() => console.log('Logged out of Play Games Services'))
 *     .catch(e => console.log('Error logging out of Play Games Services', e);
 *
 * // Check auth status.
 * this.googlePlayGamesServices.isSignedIn()
 *     .then((signedIn: SignedInResponse) => {
 *         if (signedIn.isSignedIn) {
 *             hideLoginButton();
 *         }
 *     });
 *
 * // Fetch currently authenticated user's data.
 * this.googlePlayGamesServices.showPlayer().then((data: Player) => {
 *    console.log('Player data', data);
 * });
 *
 * // Submit a score.
 * this.googlePlayGamesServices.submitScore({
 *     score: 100,
 *     leaderboardId: 'SomeLeaderboardId'
 * });
 *
 * // Submit a score and wait for reponse.
 * this.googlePlayGamesServices.submitScoreNow({
 *     score: 100,
 *     leaderboardId: 'SomeLeaderboardId'
 * }).then((data: SubmittedScoreData) => {
 *    console.log('Score related data', data);
 * });
 *
 * // Get the player score on a leaderboard.
 * this.googlePlayGamesServices.getPlayerScore({
 *     leaderboardId: 'SomeLeaderBoardId'
 * }).then((data: PlayerScoreData) => {
 *     console.log('Player score', data);
 * });
 *
 * // Show the native leaderboards window.
 * this.googlePlayGamesServices.showAllLeaderboards()
 *     .then(() => console.log('The leaderboard window is visible.'));
 *
 * // Show a signle native leaderboard window.
 * this.googlePlayGamesServices.showLeaderboard({
 *     leaderboardId: 'SomeLeaderBoardId'
 * }).then(() => console.log('The leaderboard window is visible.'));
 *
 * // Unlock an achievement.
 * this.googlePlayGamesServices.unlockAchievement({
 *     achievementId: 'SomeAchievementId'
 * }).then(() => console.log('Achievement sent'));
 *
 * // Unlock an achievement and wait for response.
 * this.googlePlayGamesServices.unlockAchievementNow({
 *     achievementId: 'SomeAchievementId'
 * }).then(() => console.log('Achievement unlocked'));
 *
 * // Incremement an achievement.
 * this.googlePlayGamesServices.incrementAchievement({
 *     step: 1,
 *     achievementId: 'SomeAchievementId'
 * }).then(() => console.log('Achievement increment sent'));
 *
 * // Incremement an achievement and wait for response.
 * this.googlePlayGamesServices.incrementAchievementNow({
 *     step: 1,
 *     achievementId: 'SomeAchievementId'
 * }).then(() => console.log('Achievement incremented'));
 *
 * // Show the native achievements window.
 * this.googlePlayGamesServices.showAchivements()
 *    .then(() => console.log('The achievements window is visible.'));
 *
 * ```
 */
@Plugin({
  pluginName: 'GooglePlayGamesServices',
  plugin: 'cordova-plugin-play-games-services',
  pluginRef: 'plugins.playGamesServices',
  repo: 'https://github.com/artberri/cordova-plugin-play-games-services',
  platforms: ['Android'],
  install: 'ionic cordova plugin add cordova-plugin-play-games-services --variable APP_ID="YOUR_APP_ID',
})
@Injectable()
export class GooglePlayGamesServices extends IonicNativePlugin {
  /**
   * Initialise native Play Games Service login procedure.
   *
   * @return {Promise<any>} Returns a promise that resolves when the player
   * is authenticated with Play Games Services.
   */
  @Cordova()
  auth(): Promise<any> {
    return;
  }

  /**
   * Sign out of Google Play Games Services.
   *
   * @return {Promise<any>} Returns a promise that resolve when the player
   * successfully signs out.
   */
  @Cordova()
  signOut(): Promise<any> {
    return;
  }

  /**
   * Check if the user is signed in.
   *
   * @return {Promise<SignedInResponse>} Returns a promise that resolves with
   * the signed in response.
   */
  @Cordova()
  isSignedIn(): Promise<SignedInResponse> {
    return;
  }

  /**
   * Show the currently authenticated player.
   *
   * @return {Promise<Player>} Returns a promise that resolves when Play
   * Games Services returns the authenticated player.
   */
  @Cordova()
  showPlayer(): Promise<Player> {
    return;
  }

  /**
   * Submit a score to a leaderboard. You should ensure that you have a
   * successful return from auth() before submitting a score.
   *
   * @param data {ScoreData} The score data you want to submit.
   * @return {Promise<any>} Returns a promise that resolves when the
   * score is submitted.
   */
  @Cordova()
  submitScore(data: ScoreData): Promise<string> {
    return;
  }

  /**
   * Submit a score to a leaderboard and waits for the response from
   * Google Play Games. You should ensure that you have a
   * successful return from auth() before submitting a score.
   *
   * @param data {ScoreData} The score data you want to submit.
   * @return {Promise<SubmittedScoreData>} Returns a promise that resolves when Play
   * Games Services returns the score information.
   */
  @Cordova()
  submitScoreNow(data: ScoreData): Promise<SubmittedScoreData> {
    return;
  }

  /**
   * Get the player score on a leaderboard. You should ensure that you have a
   * successful return from auth() before requesting a score.
   *
   * @param data {LeaderboardData} The leaderboard score you want to request.
   * @return {Promise<PlayerScoreData>} Returns a promise that resolves when Play
   * Games Services returns the player score.
   */
  @Cordova()
  getPlayerScore(data: LeaderboardData): Promise<PlayerScoreData> {
    return;
  }

  /**
   * Launches the native Play Games leaderboard view controller to show all the
   * leaderboards.
   *
   * @return {Promise<any>} Returns a promise that resolves when the native
   * leaderboards window opens.
   */
  @Cordova()
  showAllLeaderboards(): Promise<any> {
    return;
  }

  /**
   * Launches the native Play Games leaderboard view controll to show the
   * specified leaderboard.
   *
   * @param data {LeaderboardData} The leaderboard you want to show.
   * @return {Promise<any>} Returns a promise that resolves when the native
   * leaderboard window opens.
   */
  @Cordova()
  showLeaderboard(data: LeaderboardData): Promise<any> {
    return;
  }

  /**
   * Unlock an achievement.
   *
   * @param data {AchievementData}
   * @return {Promise<any>} Returns a promise that resolves when the
   * achievement is sent.
   */
  @Cordova()
  unlockAchievement(data: AchievementData): Promise<string> {
    return;
  }

  /**
   * Unlock an achievement and wait for response.
   *
   * @param data {AchievementData}
   * @return {Promise<any>} Returns a promise that resolves when the Play
   * Games Services returns that the achievement is unlocked.
   */
  @Cordova()
  unlockAchievementNow(data: AchievementData): Promise<string> {
    return;
  }

  /**
   * Increment an achievement.
   *
   * @param data {IncrementableAchievementData}
   * @return {Promise<any>} Returns a promise that resolves when the
   * achievement is sent.
   */
  @Cordova()
  incrementAchievement(data: IncrementableAchievementData): Promise<string> {
    return;
  }

  /**
   * Increment an achievement and wait for response.
   *
   * @param data {IncrementableAchievementData}
   * @return {Promise<any>} Returns a promise that resolves when the Play
   * Games Services returns that the achievement has been incremented.
   */
  @Cordova()
  incrementAchievementNow(data: IncrementableAchievementData): Promise<string> {
    return;
  }

  /**
   * Lauches the native Play Games achievements view controller to show
   * achievements.
   *
   * @return {Promise<any>} Returns a promise that resolves when the
   * achievement window opens.
   */
  @Cordova()
  showAchievements(): Promise<any> {
    return;
  }
}
