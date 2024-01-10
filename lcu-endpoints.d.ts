import * as LCUTypes from "./lcu-types";

export interface LCUEndpoints {
	"/AsyncDelete": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/AsyncResult": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/AsyncStatus": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/Cancel": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/lol-chat/v1/blocked-players/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LolChatBlockedPlayerResource }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/conversations/active": {
		get: { Parameters: [], Body: never, Response: LolChatActiveConversationResource }
		put: { Parameters: [], Body: LolChatActiveConversationResource, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-chat/v1/conversations/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LolChatConversationResource }
		put: { Parameters: [id: string], Body: LolChatConversationResource, Response: LolChatConversationResource }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/conversations/{id}/messages": {
		get: { Parameters: [id: string], Body: never, Response: LolChatConversationMessageResource[] }
		post: { Parameters: [id: string], Body: LolChatConversationMessageResource, Response: LolChatConversationMessageResource }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/errors/{id}": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-chat/v1/friend-groups/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolChatGroupResource }
		put: { Parameters: [id: number], Body: LolChatGroupResource, Response: unknown }
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-chat/v1/friends/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LolChatFriendResource }
		put: { Parameters: [id: string], Body: LolChatFriendResource, Response: unknown }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/player-mutes": {
		get: { Parameters: [], Body: never, Response: Record<string, LolChatPlayerMuteStatus> }
		post: { Parameters: [], Body: LolChatPlayerMuteUpdate, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-chat/v1/session": {
		get: { Parameters: [], Body: never, Response: LolChatSessionResource }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-chat/v1/settings/{key}": {
		get: { Parameters: [key: string], Body: never, Response: unknown }
		put: { Parameters: [key: string, params: { "value": unknown, "doAsync"?: boolean }], Body: never, Response: unknown }
		delete: { Parameters: [key: string, params?: { "doAsync"?: boolean }], Body: never, Response: unknown }
	},
	"/lol-chat/v2/friend-requests/{id}": {
		put: { Parameters: [id: string], Body: LolChatFriendRequestResource, Response: unknown }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/voice": {
		post: { Parameters: [], Body: never, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/voice-delay/{delaySeconds}": {
		post: { Parameters: [delaySeconds: number], Body: never, Response: unknown }
		delete: { Parameters: [delaySeconds: number], Body: never, Response: unknown }
	},
	"/lol-cosmetics/v1/selection/companion": {
		put: { Parameters: [], Body: number, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-cosmetics/v1/selection/playbook": {
		put: { Parameters: [], Body: number, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-cosmetics/v1/selection/tft-damage-skin": {
		put: { Parameters: [], Body: number, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-cosmetics/v1/selection/tft-map-skin": {
		put: { Parameters: [], Body: number, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/early-exit-notifications/eog": {
		get: { Parameters: [], Body: never, Response: unknown[] }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/eog/{key}": {
		delete: { Parameters: [key: number], Body: never, Response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/missions": {
		get: { Parameters: [], Body: never, Response: unknown[] }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/missions/{key}": {
		delete: { Parameters: [key: number], Body: never, Response: void }
	},
	"/lol-highlights/v1/highlights/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolHighlightsHighlight }
		put: { Parameters: [id: number], Body: LolHighlightsHighlight, Response: LolHighlightsHighlight }
		delete: { Parameters: [id: number], Body: never, Response: LolHighlightsHighlight }
	},
	"/lol-honeyfruit/v1/account-claim/migration": {
		get: { Parameters: [], Body: never, Response: string }
		post: { Parameters: [], Body: never, Response: string }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-leaver-buster/v1/notifications/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolLeaverBusterLeaverBusterNotificationResource }
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-loadouts/v4/loadouts/{id}": {
		put: { Parameters: [id: string], Body: LolLoadoutsUpdateLoadoutDTO, Response: LolLoadoutsScopedLoadout }
		patch: { Parameters: [id: string], Body: LolLoadoutsUpdateLoadoutDTO, Response: LolLoadoutsScopedLoadout }
		delete: { Parameters: [id: string], Body: never, Response: void }
	},
	"/lol-lobby/v1/clash": {
		post: { Parameters: [], Body: string, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/bots/{summonerInternalName}": {
		post: { Parameters: [summonerInternalName: string], Body: LolLobbyLobbyBotParams, Response: unknown }
		delete: { Parameters: [summonerInternalName: string], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/lobby": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyDto }
		post: { Parameters: [], Body: LolLobbyLobbyChangeGameDto, Response: LolLobbyLobbyDto }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-lobby/v2/lobby/matchmaking/search": {
		post: { Parameters: [], Body: never, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/notifications/{notificationId}": {
		delete: { Parameters: [notificationId: string], Body: never, Response: unknown }
	},
	"/lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}": {
		post: { Parameters: [serviceName: string, methodName: string], Body: number, Response: void }
		delete: { Parameters: [serviceName: string, methodName: string, params: { "pluginId": number }], Body: never, Response: void }
	},
	"/lol-login/v1/session": {
		get: { Parameters: [], Body: never, Response: LolLoginLoginSession }
		post: { Parameters: [], Body: LolLoginUsernameAndPassword, Response: LolLoginLoginSession }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-login/v1/shutdown-locks/{lockName}": {
		put: { Parameters: [lockName: string], Body: never, Response: void }
		delete: { Parameters: [lockName: string], Body: never, Response: void }
	},
	"/lol-loot/v1/loot-grants/{id}": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-loot/v1/player-loot/{lootId}/new-notification": {
		delete: { Parameters: [lootId: string], Body: never, Response: unknown }
	},
	"/lol-matchmaking/v1/search": {
		get: { Parameters: [], Body: never, Response: LolMatchmakingMatchmakingSearchResource }
		post: { Parameters: [], Body: never, Response: unknown }
		put: { Parameters: [], Body: LolMatchmakingMatchmakingSearchResource, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-patch/v1/notifications/{id}": {
		delete: { Parameters: [id: string], Body: never, Response: void }
	},
	"/lol-perks/v1/pages": {
		get: { Parameters: [], Body: never, Response: LolPerksPerkPageResource[] }
		post: { Parameters: [], Body: LolPerksPerkPageResource, Response: LolPerksPerkPageResource }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-perks/v1/pages/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolPerksPerkPageResource }
		put: { Parameters: [id: number], Body: LolPerksPerkPageResource, Response: LolPerksPerkPageResource }
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-perks/v1/pages/{id}/auto-modified-selections": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-player-behavior/v1/code-of-conduct-notification": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorCodeOfConductNotification }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-player-behavior/v1/reporter-feedback/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LolPlayerBehaviorReporterFeedback }
		delete: { Parameters: [id: string], Body: never, Response: LolPlayerBehaviorReporterFeedback }
	},
	"/lol-player-messaging/v1/celebration/notification/{id}/acknowledge": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-player-messaging/v1/notification/{id}/acknowledge": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-player-report-sender/v1/reported-players/gameId/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: string[] }
		delete: { Parameters: [gameId: number], Body: never, Response: unknown }
	},
	"/lol-pre-end-of-game/v1/registration/{sequenceEventName}": {
		delete: { Parameters: [sequenceEventName: string], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/mic-test": {
		get: { Parameters: [], Body: never, Response: LolPremadeVoiceAudioPropertiesResource }
		post: { Parameters: [], Body: never, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-premade-voice/v1/session": {
		post: { Parameters: [], Body: never, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-rms/v1/champion-mastery-leaveup-update/{id}": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-rso-auth/v1/authorization": {
		get: { Parameters: [], Body: never, Response: LolRsoAuthAuthorization }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-rso-auth/v1/session": {
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-rso-auth/v2/config": {
		post: { Parameters: [], Body: LolRsoAuthPublicClientConfig, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-simple-dialog-messages/v1/messages/{messageId}": {
		delete: { Parameters: [messageId: number], Body: never, Response: unknown }
	},
	"/lol-statstones/v1/vignette-notifications": {
		get: { Parameters: [], Body: never, Response: unknown[] }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-statstones/v1/vignette-notifications/{key}": {
		delete: { Parameters: [key: number], Body: never, Response: void }
	},
	"/lol-suggested-players/v1/suggested-players/{summonerId}": {
		delete: { Parameters: [summonerId: number], Body: never, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/champions": {
		patch: { Parameters: [], Body: number[], Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/championsById/{championName}": {
		post: { Parameters: [championName: string], Body: never, Response: unknown }
		delete: { Parameters: [championName: string], Body: never, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/champions/{index}": {
		post: { Parameters: [index: number], Body: string, Response: unknown }
		delete: { Parameters: [index: number], Body: never, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/dirty": {
		get: { Parameters: [], Body: never, Response: LolTftTeamPlannerTeamPlan }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-tft-troves/v1/roll-rewards": {
		get: { Parameters: [], Body: never, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/patcher/v1/notifications/{id}": {
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}": {
		delete: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/player-notifications/v1/notifications/{id}": {
		get: { Parameters: [id: number], Body: never, Response: PlayerNotificationsPlayerNotificationResource }
		put: { Parameters: [id: number], Body: unknown, Response: PlayerNotificationsPlayerNotificationResource }
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/riot-messaging-service/v1/connect": {
		post: { Parameters: [], Body: string, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riot-messaging-service/v1/entitlements": {
		post: { Parameters: [], Body: RiotMessagingServiceEntitlementsToken, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riot-messaging-service/v1/session": {
		get: { Parameters: [], Body: never, Response: RiotMessagingServiceSession }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/affinity": {
		get: { Parameters: [], Body: never, Response: unknown }
		post: { Parameters: [], Body: string, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/splash": {
		put: { Parameters: [], Body: string, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/v1/auth-tokens/{authToken}": {
		put: { Parameters: [authToken: string], Body: never, Response: unknown }
		delete: { Parameters: [authToken: string], Body: never, Response: unknown }
	},
	"/tracing/v1/performance/{name}": {
		post: { Parameters: [name: string], Body: never, Response: void }
		delete: { Parameters: [name: string], Body: never, Response: void }
	},
	"/tracing/v1/trace/time-series-event/{eventName}": {
		post: { Parameters: [eventName: string], Body: number, Response: void }
		delete: { Parameters: [eventName: string, params: { "when": number, "suffix"?: string }], Body: never, Response: void }
	},
	"/Exit": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/anti-addiction/v1/policies/{policyType}/anti-addiction-state": {
		get: { Parameters: [policyType: LolAntiAddictionPolicyType], Body: never, Response: LolAntiAddictionAntiAddictionState }
	},
	"/{plugin}/assets/{+path}": {
		get: { Parameters: [plugin: string, path: string, params?: { "if-none-match"?: string }], Body: never, Response: unknown }
		head: { Parameters: [plugin: string, path: string, params?: { "if-none-match"?: string }], Body: never, Response: unknown }
	},
	"/client-config/v1/config": {
		get: { Parameters: [params: { "type": ClientConfigConfigType, "app"?: string, "version"?: string, "patchline"?: string, "region"?: string, "namespace"?: string }], Body: never, Response: Record<string, unknown> }
	},
	"/client-config/v1/config/{name}": {
		get: { Parameters: [name: string, params: { "type": ClientConfigConfigType, "app"?: string, "version"?: string, "patchline"?: string, "region"?: string }], Body: never, Response: unknown }
	},
	"/client-config/v1/status/{type}": {
		get: { Parameters: [type: ClientConfigConfigType], Body: never, Response: ClientConfigConfigStatus }
	},
	"/client-config/v2/config/{name}": {
		get: { Parameters: [name: string], Body: never, Response: unknown }
	},
	"/client-config/v2/namespace/{namespace}": {
		get: { Parameters: [namespace: string], Body: never, Response: Record<string, unknown> }
	},
	"/client-config/v2/namespace/{namespace}/player": {
		get: { Parameters: [namespace: string], Body: never, Response: Record<string, unknown> }
	},
	"/client-config/v2/namespace/{namespace}/public": {
		get: { Parameters: [namespace: string], Body: never, Response: Record<string, unknown> }
	},
	"/config/v1/config": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/cookie-jar/v1/cookies": {
		get: { Parameters: [], Body: never, Response: cookie[] }
		post: { Parameters: [], Body: cookie[], Response: unknown }
	},
	"/crash-reporting/v1/crash-status": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/data-store/v1/install-dir": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/data-store/v1/install-settings/{+path}": {
		get: { Parameters: [path: string], Body: never, Response: unknown }
		post: { Parameters: [path: string], Body: unknown, Response: void }
	},
	"/data-store/v1/system-settings/{+path}": {
		get: { Parameters: [path: string], Body: never, Response: unknown }
	},
	"/deep-links/v1/settings": {
		get: { Parameters: [], Body: never, Response: DeepLinksDeepLinksSettings }
	},
	"/entitlements/v1/token": {
		get: { Parameters: [], Body: never, Response: EntitlementsToken }
	},
	"/lol-account-verification/v1/is-verified": {
		get: { Parameters: [], Body: never, Response: LolAccountVerificationIsVerifiedResponse }
	},
	"/lol-account-verification/v1/phone-number": {
		get: { Parameters: [], Body: never, Response: LolAccountVerificationPhoneNumberResponse }
	},
	"/lol-active-boosts/v1/active-boosts": {
		get: { Parameters: [], Body: never, Response: LolActiveBoostsActiveBoosts }
	},
	"/lol-anti-addiction/v1/anti-addiction-token": {
		get: { Parameters: [], Body: never, Response: LolAntiAddictionAntiAddictionToken }
	},
	"/lol-banners/v1/current-summoner/flags": {
		get: { Parameters: [], Body: never, Response: LolBannersBannerFlag[] }
	},
	"/lol-banners/v1/current-summoner/flags/equipped": {
		get: { Parameters: [], Body: never, Response: LolBannersBannerFlag }
		put: { Parameters: [], Body: LolBannersBannerFlag, Response: LolBannersBannerFlag }
	},
	"/lol-banners/v1/current-summoner/frames/equipped": {
		get: { Parameters: [], Body: never, Response: LolBannersBannerFrame }
	},
	"/lol-banners/v1/players/{puuid}/flags/equipped": {
		get: { Parameters: [puuid: string], Body: never, Response: LolBannersBannerFlag }
	},
	"/lol-career-stats/v1/champion-averages/{championId}/{position}/{tier}/{queue}": {
		get: { Parameters: [championId: number, position: LolCareerStatsSummonersRiftPosition, tier: string, queue: LolCareerStatsCareerStatsQueueType], Body: never, Response: LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/champion-averages/season/{season}/{championId}/{position}/{tier}/{queue}": {
		get: { Parameters: [season: number, championId: number, position: LolCareerStatsSummonersRiftPosition, tier: string, queue: LolCareerStatsCareerStatsQueueType], Body: never, Response: LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/champion-experts/{championId}/{position}": {
		get: { Parameters: [championId: number, position: LolCareerStatsSummonersRiftPosition], Body: never, Response: LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/champion-experts/season/{season}/{championId}/{position}": {
		get: { Parameters: [season: number, championId: number, position: LolCareerStatsSummonersRiftPosition], Body: never, Response: LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/position-averages/{position}/{tier}/{queue}": {
		get: { Parameters: [position: LolCareerStatsSummonersRiftPosition, tier: string, queue: LolCareerStatsCareerStatsQueueType], Body: never, Response: LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/position-averages/season/{season}/{position}/{tier}/{queue}": {
		get: { Parameters: [season: number, position: LolCareerStatsSummonersRiftPosition, tier: string, queue: LolCareerStatsCareerStatsQueueType], Body: never, Response: LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/position-experts/{position}": {
		get: { Parameters: [position: LolCareerStatsSummonersRiftPosition], Body: never, Response: LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/position-experts/season/{season}/{position}": {
		get: { Parameters: [season: number, position: LolCareerStatsSummonersRiftPosition], Body: never, Response: LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/summoner-games/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: unknown }
	},
	"/lol-career-stats/v1/summoner-games/{puuid}/season/{season}": {
		get: { Parameters: [puuid: string, season: number], Body: never, Response: unknown }
	},
	"/lol-career-stats/v1/summoner-stats/{puuid}/{season}/{queue}/{position}": {
		get: { Parameters: [puuid: string, season: number, queue: LolCareerStatsCareerStatsQueueType, position: LolCareerStatsSummonersRiftPosition, params?: { "championId"?: number }], Body: never, Response: unknown }
	},
	"/lol-catalog/v1/item-details": {
		get: { Parameters: [params: { "inventoryType": string, "itemId": number }], Body: never, Response: LolCatalogCatalogPluginItemWithDetails }
	},
	"/lol-catalog/v1/items": {
		get: { Parameters: [params: { "inventoryType": string, "itemIds": number[] }], Body: never, Response: LolCatalogItemChoiceDetails[] }
	},
	"/lol-catalog/v1/items/{inventoryType}": {
		get: { Parameters: [inventoryType: string], Body: never, Response: LolCatalogCatalogPluginItem[] }
	},
	"/lol-catalog/v1/items-list-details/skip-cache": {
		get: { Parameters: [params: { "catalogItemsKeys": LolCatalogItemKey[] }], Body: never, Response: LolCatalogCatalogPluginItemWithDetails[] }
	},
	"/lol-challenges/v1/available-queue-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-challenges/v1/challenges/category-data": {
		get: { Parameters: [], Body: never, Response: Record<string, LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/challenges/local-player": {
		get: { Parameters: [], Body: never, Response: Record<string, LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/client-state": {
		get: { Parameters: [], Body: never, Response: LolChallengesClientState }
	},
	"/lol-challenges/v1/level-points": {
		get: { Parameters: [], Body: never, Response: Record<string, number> }
	},
	"/lol-challenges/v1/my-updated-challenges/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: Record<string, LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/penalty": {
		get: { Parameters: [], Body: never, Response: LolChallengesUIChallengePenalty }
	},
	"/lol-challenges/v1/seasons": {
		get: { Parameters: [], Body: never, Response: LolChallengesChallengeSeason[] }
	},
	"/lol-challenges/v1/summary-player-data/local-player": {
		get: { Parameters: [], Body: never, Response: LolChallengesUIPlayerSummary }
	},
	"/lol-challenges/v1/summary-player-data/player/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LolChallengesUIPlayerSummary }
	},
	"/lol-challenges/v1/summary-players-data/players": {
		get: { Parameters: [params: { "puuids": string[] }], Body: never, Response: Record<string, LolChallengesUIPlayerSummary> }
	},
	"/lol-challenges/v1/updated-challenges/{gameId}/{puuid}": {
		get: { Parameters: [gameId: number, puuid: string], Body: never, Response: Record<string, LolChallengesUIChallenge> }
	},
	"/lol-challenges/v2/titles/all": {
		get: { Parameters: [], Body: never, Response: Record<string, LolChallengesUITitle> }
	},
	"/lol-challenges/v2/titles/local-player": {
		get: { Parameters: [], Body: never, Response: LolChallengesUITitle[] }
	},
	"/lol-champ-select-legacy/v1/bannable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select-legacy/v1/current-champion": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-champ-select-legacy/v1/disabled-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select-legacy/v1/implementation-active": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-champ-select-legacy/v1/pickable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select-legacy/v1/pickable-skin-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select-legacy/v1/session": {
		get: { Parameters: [], Body: never, Response: LolChampSelectLegacyChampSelectSession }
	},
	"/lol-champ-select-legacy/v1/session/my-selection": {
		get: { Parameters: [], Body: never, Response: LolChampSelectLegacyChampSelectPlayerSelection }
		patch: { Parameters: [], Body: LolChampSelectLegacyChampSelectMySelection, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/timer": {
		get: { Parameters: [], Body: never, Response: LolChampSelectLegacyChampSelectTimer }
	},
	"/lol-champ-select-legacy/v1/session/trades": {
		get: { Parameters: [], Body: never, Response: LolChampSelectLegacyChampSelectTradeContract[] }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolChampSelectLegacyChampSelectTradeContract }
	},
	"/lol-champ-select-legacy/v1/team-boost": {
		get: { Parameters: [], Body: never, Response: LolChampSelectLegacyTeamBoost }
	},
	"/lol-champ-select/v1/all-grid-champions": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampGridChampion[] }
	},
	"/lol-champ-select/v1/bannable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select/v1/current-champion": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-champ-select/v1/disabled-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select/v1/grid-champions/{championId}": {
		get: { Parameters: [championId: number], Body: never, Response: LolChampSelectChampGridChampion }
	},
	"/lol-champ-select/v1/muted-players": {
		get: { Parameters: [], Body: never, Response: LolChampSelectMutedPlayerInfo[] }
	},
	"/lol-champ-select/v1/ongoing-swap": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampSelectSwapNotification }
	},
	"/lol-champ-select/v1/ongoing-trade": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampSelectTradeNotification }
	},
	"/lol-champ-select/v1/pickable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select/v1/pickable-skin-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select/v1/pin-drop-notification": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampSelectPinDropNotification }
	},
	"/lol-champ-select/v1/session": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampSelectSession }
	},
	"/lol-champ-select/v1/session/my-selection": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampSelectPlayerSelection }
		patch: { Parameters: [], Body: LolChampSelectChampSelectMySelection, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampSelectSwapContract[] }
	},
	"/lol-champ-select/v1/session/swaps/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolChampSelectChampSelectSwapContract }
	},
	"/lol-champ-select/v1/session/timer": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampSelectTimer }
	},
	"/lol-champ-select/v1/session/trades": {
		get: { Parameters: [], Body: never, Response: LolChampSelectChampSelectTradeContract[] }
	},
	"/lol-champ-select/v1/session/trades/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolChampSelectChampSelectTradeContract }
	},
	"/lol-champ-select/v1/sfx-notifications": {
		get: { Parameters: [], Body: never, Response: LolChampSelectSfxNotification[] }
	},
	"/lol-champ-select/v1/skin-carousel-skins": {
		get: { Parameters: [], Body: never, Response: LolChampSelectSkinSelectorSkin[] }
	},
	"/lol-champ-select/v1/skin-selector-info": {
		get: { Parameters: [], Body: never, Response: LolChampSelectSkinSelectorInfo }
	},
	"/lol-champ-select/v1/summoners/{slotId}": {
		get: { Parameters: [slotId: number], Body: never, Response: LolChampSelectChampSelectSummoner }
	},
	"/lol-champ-select/v1/team-boost": {
		get: { Parameters: [], Body: never, Response: LolChampSelectTeamBoost }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolChampionsCollectionsChampion[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}": {
		get: { Parameters: [summonerId: number, championId: number], Body: never, Response: LolChampionsCollectionsChampion }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins": {
		get: { Parameters: [summonerId: number, championId: number], Body: never, Response: LolChampionsCollectionsChampionSkin[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{championSkinId}": {
		get: { Parameters: [summonerId: number, championId: number, championSkinId: number], Body: never, Response: LolChampionsCollectionsChampionSkin }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{skinId}/chromas": {
		get: { Parameters: [summonerId: number, championId: number, skinId: number], Body: never, Response: LolChampionsCollectionsChampionChroma[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions-minimal": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolChampionsCollectionsChampionMinimal[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions-playable-count": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolChampionsCollectionsChampionPlayableCounts }
	},
	"/lol-champions/v1/inventories/{summonerId}/skins-minimal": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolChampionsCollectionsChampionSkinMinimal[] }
	},
	"/lol-champions/v1/owned-champions-minimal": {
		get: { Parameters: [], Body: never, Response: LolChampionsCollectionsChampionMinimal[] }
	},
	"/lol-chat/v1/blocked-players": {
		get: { Parameters: [], Body: never, Response: LolChatBlockedPlayerResource[] }
		post: { Parameters: [], Body: LolChatBlockedPlayerResource, Response: unknown }
	},
	"/lol-chat/v1/config": {
		get: { Parameters: [], Body: never, Response: LolChatChatServiceDynamicClientConfig }
	},
	"/lol-chat/v1/conversations": {
		get: { Parameters: [], Body: never, Response: LolChatConversationResource[] }
		post: { Parameters: [], Body: LolChatConversationResource, Response: LolChatConversationResource }
	},
	"/lol-chat/v1/conversations/{id}/participants": {
		get: { Parameters: [id: string], Body: never, Response: LolChatUserResource[] }
		post: { Parameters: [id: string], Body: LolChatUserResource, Response: unknown }
	},
	"/lol-chat/v1/conversations/{id}/participants/{pid}": {
		get: { Parameters: [id: string, pid: string], Body: never, Response: LolChatUserResource }
	},
	"/lol-chat/v1/conversations/notify": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-chat/v1/errors": {
		get: { Parameters: [], Body: never, Response: LolChatErrorResource[] }
	},
	"/lol-chat/v1/friend-counts": {
		get: { Parameters: [], Body: never, Response: LolChatFriendCountsResource }
	},
	"/lol-chat/v1/friend-exists/{summonerId}": {
		get: { Parameters: [summonerId: number], Body: never, Response: boolean }
	},
	"/lol-chat/v1/friend-groups": {
		get: { Parameters: [], Body: never, Response: LolChatGroupResource[] }
		post: { Parameters: [], Body: LolChatGroupResource, Response: unknown }
	},
	"/lol-chat/v1/friend-groups/{id}/friends": {
		get: { Parameters: [id: number], Body: never, Response: LolChatFriendResource[] }
	},
	"/lol-chat/v1/friends": {
		get: { Parameters: [], Body: never, Response: LolChatFriendResource[] }
	},
	"/lol-chat/v1/me": {
		get: { Parameters: [], Body: never, Response: LolChatUserResource }
		put: { Parameters: [], Body: LolChatUserResource, Response: LolChatUserResource }
	},
	"/lol-chat/v1/proxy-mode-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-chat/v1/resources": {
		get: { Parameters: [], Body: never, Response: LolChatProductMetadataMap }
	},
	"/lol-chat/v1/settings": {
		get: { Parameters: [], Body: never, Response: unknown }
		put: { Parameters: [params: { "data": unknown, "doAsync"?: boolean }], Body: never, Response: unknown }
	},
	"/lol-chat/v2/friend-requests": {
		get: { Parameters: [], Body: never, Response: LolChatFriendRequestResource[] }
		post: { Parameters: [], Body: LolChatFriendRequestResource, Response: unknown }
	},
	"/lol-clash/v1/all-tournaments": {
		get: { Parameters: [], Body: never, Response: TournamentDTO[] }
	},
	"/lol-clash/v1/awaiting-resent-eog": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/bracket/{bracketId}": {
		get: { Parameters: [bracketId: number], Body: never, Response: LolClashBracket }
	},
	"/lol-clash/v1/checkin-allowed": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/currentTournamentIds": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-clash/v1/disabled-config": {
		get: { Parameters: [], Body: never, Response: LolClashClashDisabledConfig }
	},
	"/lol-clash/v1/enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/eog-player-update": {
		get: { Parameters: [], Body: never, Response: LolClashEogPlayerUpdateDTO }
	},
	"/lol-clash/v1/event/{uuid}": {
		get: { Parameters: [uuid: string], Body: never, Response: ClashEventData }
	},
	"/lol-clash/v1/game-end": {
		get: { Parameters: [], Body: never, Response: LolClashTournamentGameEnd }
	},
	"/lol-clash/v1/historyandwinners": {
		get: { Parameters: [], Body: never, Response: LolClashTournamentHistoryAndWinners }
	},
	"/lol-clash/v1/iconconfig": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/invited-roster-ids": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-clash/v1/lft/team/requests": {
		get: { Parameters: [], Body: never, Response: PendingOpenedTeamDTO[] }
	},
	"/lol-clash/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LolClashPlayerNotificationData }
	},
	"/lol-clash/v1/ping": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/player": {
		get: { Parameters: [], Body: never, Response: LolClashPlayerData }
	},
	"/lol-clash/v1/player/chat-rosters": {
		get: { Parameters: [], Body: never, Response: LolClashPlayerChatRoster[] }
	},
	"/lol-clash/v1/player/history": {
		get: { Parameters: [], Body: never, Response: LolClashRosterStats[] }
	},
	"/lol-clash/v1/playmode-restricted": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/rewards": {
		get: { Parameters: [], Body: never, Response: LolClashPlayerRewards }
	},
	"/lol-clash/v1/roster/{rosterId}": {
		get: { Parameters: [rosterId: string], Body: never, Response: LolClashRoster }
	},
	"/lol-clash/v1/roster/{rosterId}/stats": {
		get: { Parameters: [rosterId: number], Body: never, Response: LolClashRosterStats }
	},
	"/lol-clash/v1/scouting/champions": {
		get: { Parameters: [params: { "puuids": string[] }], Body: never, Response: LolClashScoutingChampions[] }
	},
	"/lol-clash/v1/scouting/matchhistory": {
		get: { Parameters: [params: { "summonerIds": number[] }], Body: never, Response: unknown }
	},
	"/lol-clash/v1/season-rewards/{seasonId}": {
		get: { Parameters: [seasonId: number], Body: never, Response: ClashSeasonRewardResult }
	},
	"/lol-clash/v1/simple-state-flags": {
		get: { Parameters: [], Body: never, Response: LolClashSimpleStateFlag[] }
	},
	"/lol-clash/v1/thirdparty/team-data": {
		get: { Parameters: [], Body: never, Response: LolClashThirdPartyApiRoster }
	},
	"/lol-clash/v1/time": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-clash/v1/tournament/{tournamentId}": {
		get: { Parameters: [tournamentId: number], Body: never, Response: LolClashTournament }
	},
	"/lol-clash/v1/tournament/{tournamentId}/get-player-tiers": {
		get: { Parameters: [tournamentId: number, params: { "summonerIds": number[] }], Body: never, Response: PlayerTierDTO[] }
	},
	"/lol-clash/v1/tournament/{tournamentId}/player": {
		get: { Parameters: [tournamentId: number], Body: never, Response: LolClashPlayerTournamentData }
	},
	"/lol-clash/v1/tournament/{tournamentId}/player-honor-restricted": {
		get: { Parameters: [tournamentId: number], Body: never, Response: boolean }
	},
	"/lol-clash/v1/tournament/{tournamentId}/stateInfo": {
		get: { Parameters: [tournamentId: number], Body: never, Response: LolClashTournamentStateInfo }
	},
	"/lol-clash/v1/tournament/{tournamentId}/winners": {
		get: { Parameters: [tournamentId: number], Body: never, Response: LolClashTournamentWinnerHistory }
	},
	"/lol-clash/v1/tournament/cancelled": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-clash/v1/tournament/get-all-player-tiers": {
		get: { Parameters: [], Body: never, Response: PlayerTierDTO[] }
	},
	"/lol-clash/v1/tournament-state-info": {
		get: { Parameters: [], Body: never, Response: LolClashTournamentStateInfo[] }
	},
	"/lol-clash/v1/tournament-summary": {
		get: { Parameters: [], Body: never, Response: LolClashTournamentSummary[] }
	},
	"/lol-clash/v1/visible": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/voice-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v2/playmode-restricted": {
		get: { Parameters: [], Body: never, Response: LolClashPlaymodeRestrictedInfo }
	},
	"/lol-client-config/v3/client-config/{name}": {
		get: { Parameters: [name: string], Body: never, Response: unknown }
	},
	"/lol-client-config/v3/client-config/operational/{name}": {
		get: { Parameters: [name: string], Body: never, Response: unknown }
	},
	"/lol-collections/v1/inventories/{puuid}/champion-mastery": {
		get: { Parameters: [puuid: string], Body: never, Response: LolCollectionsCollectionsChampionMastery[] }
	},
	"/lol-collections/v1/inventories/{puuid}/champion-mastery/top": {
		get: { Parameters: [puuid: string, params: { "limit": number, "sortRule"?: string }], Body: never, Response: LolCollectionsCollectionsTopChampionMasteries }
	},
	"/lol-collections/v1/inventories/{summonerId}/backdrop": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolCollectionsCollectionsSummonerBackdrop }
	},
	"/lol-collections/v1/inventories/{summonerId}/spells": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolCollectionsCollectionsSummonerSpells }
	},
	"/lol-collections/v1/inventories/{summonerId}/ward-skins": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolCollectionsCollectionsWardSkin[] }
	},
	"/lol-collections/v1/inventories/{summonerId}/ward-skins/{wardSkinId}": {
		get: { Parameters: [summonerId: number, wardSkinId: number], Body: never, Response: LolCollectionsCollectionsWardSkin }
	},
	"/lol-collections/v1/inventories/chest-eligibility": {
		get: { Parameters: [], Body: never, Response: LolCollectionsCollectionsChestEligibility }
	},
	"/lol-collections/v1/inventories/local-player/champion-mastery-score": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-collections/v1/inventories/scouting": {
		get: { Parameters: [params: { "puuids": string[] }], Body: never, Response: RankedScoutingDTO[] }
	},
	"/lol-content-targeting/v1/filters": {
		get: { Parameters: [], Body: never, Response: LolContentTargetingContentTargetingFilterResponse }
	},
	"/lol-content-targeting/v1/locale": {
		get: { Parameters: [], Body: never, Response: LolContentTargetingContentTargetingLocaleResponse }
	},
	"/lol-content-targeting/v1/protected_filters": {
		get: { Parameters: [], Body: never, Response: LolContentTargetingContentTargetingFilterResponse }
	},
	"/lol-cosmetics/v1/inventories/{setName}/companions": {
		get: { Parameters: [setName: string], Body: never, Response: LolCosmeticsCompanionsGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/damage-skins": {
		get: { Parameters: [setName: string], Body: never, Response: LolCosmeticsTFTDamageSkinGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/map-skins": {
		get: { Parameters: [setName: string], Body: never, Response: LolCosmeticsTFTMapSkinGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/playbooks": {
		get: { Parameters: [setName: string], Body: never, Response: LolCosmeticsTFTPlaybookGroupedViewModel }
	},
	"/lol-drops/v1/drop-tables": {
		get: { Parameters: [], Body: never, Response: LolDropsCapDropsDropTableWithPityDTO[] }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}": {
		get: { Parameters: [dropTableId: string], Body: never, Response: LolDropsCapDropsDropTableWithPityDTO }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/odds-list": {
		get: { Parameters: [dropTableId: string], Body: never, Response: LolDropsCapDropsOddsListEntryDTO[] }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/odds-tree": {
		get: { Parameters: [dropTableId: string], Body: never, Response: LolDropsCapDropsOddsTreeNodeDTO }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/players/{playerId}/pity-count": {
		get: { Parameters: [dropTableId: string, playerId: string], Body: never, Response: LolDropsCapDropTableCounterDTO }
	},
	"/lol-drops/v1/players/{playerId}/pity-counts": {
		get: { Parameters: [playerId: string], Body: never, Response: LolDropsCapDropTableCounterDTO[] }
	},
	"/lol-drops/v1/players/{playerId}/total-rolls-counts": {
		get: { Parameters: [playerId: string], Body: never, Response: LolDropsCapDropTableCounterDTO[] }
	},
	"/lol-drops/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-email-verification/v1/email": {
		get: { Parameters: [], Body: never, Response: LolEmailVerificationEmailVerificationSession }
		put: { Parameters: [], Body: LolEmailVerificationEmailUpdate, Response: unknown }
	},
	"/lol-end-of-game/v1/champion-mastery-updates": {
		get: { Parameters: [], Body: never, Response: LolEndOfGameChampionMasteryUpdate }
	},
	"/lol-end-of-game/v1/eog-stats-block": {
		get: { Parameters: [], Body: never, Response: LolEndOfGameEndOfGameStats }
	},
	"/lol-end-of-game/v1/gameclient-eog-stats-block": {
		get: { Parameters: [], Body: never, Response: LolEndOfGameGameClientEndOfGameStats }
		post: { Parameters: [], Body: LolEndOfGameGameClientEndOfGameStats, Response: unknown }
	},
	"/lol-end-of-game/v1/tft-eog-stats": {
		get: { Parameters: [], Body: never, Response: LolEndOfGameTFTEndOfGameViewModel }
	},
	"/lol-esport-stream-notifications/v1/live-streams": {
		get: { Parameters: [], Body: never, Response: LolEsportStreamNotificationsESportsLiveStreams }
	},
	"/lol-esport-stream-notifications/v1/stream-url": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-event-shop/v1/categories-offers": {
		get: { Parameters: [], Body: never, Response: LolEventShopCategoryOffersUIData[] }
	},
	"/lol-event-shop/v1/event-details-data": {
		get: { Parameters: [], Body: never, Response: LolEventShopEventDetailsUIData }
	},
	"/lol-event-shop/v1/failure-loading-reward-track": {
		get: { Parameters: [], Body: never, Response: LolEventShopEventShopError }
	},
	"/lol-event-shop/v1/failure-loading-token-shop": {
		get: { Parameters: [], Body: never, Response: LolEventShopEventShopError }
	},
	"/lol-event-shop/v1/info": {
		get: { Parameters: [], Body: never, Response: LolEventShopEventShopInfoUIData }
	},
	"/lol-event-shop/v1/is-grace-period": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-event-shop/v1/navigation-button-data": {
		get: { Parameters: [], Body: never, Response: LolEventShopNavigationButtonUIData }
	},
	"/lol-event-shop/v1/pass-background-data": {
		get: { Parameters: [], Body: never, Response: LolEventShopEventBackgroundUIData }
	},
	"/lol-event-shop/v1/pass-bundles": {
		get: { Parameters: [], Body: never, Response: LolEventShopBundleOfferUIData[] }
	},
	"/lol-event-shop/v1/progress-info-data": {
		get: { Parameters: [], Body: never, Response: LolEventShopProgressInfoUIData }
	},
	"/lol-event-shop/v1/reward-track-bonus-items": {
		get: { Parameters: [], Body: never, Response: LolEventShopRewardTrackItem[] }
	},
	"/lol-event-shop/v1/reward-track-bonus-progress": {
		get: { Parameters: [], Body: never, Response: LolEventShopRewardTrackProgress }
	},
	"/lol-event-shop/v1/reward-track-items": {
		get: { Parameters: [], Body: never, Response: LolEventShopRewardTrackItem[] }
	},
	"/lol-event-shop/v1/reward-track-progress": {
		get: { Parameters: [], Body: never, Response: LolEventShopRewardTrackProgress }
	},
	"/lol-event-shop/v1/reward-track-xp": {
		get: { Parameters: [], Body: never, Response: LolEventShopRewardTrackXP }
	},
	"/lol-event-shop/v1/token-balance": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-event-shop/v1/token-shop-data": {
		get: { Parameters: [], Body: never, Response: LolEventShopTokenShopUIData }
	},
	"/lol-event-shop/v1/token-upsell": {
		get: { Parameters: [], Body: never, Response: LolEventShopTokenUpsell[] }
	},
	"/lol-event-shop/v1/unclaimed-rewards": {
		get: { Parameters: [], Body: never, Response: LolEventShopUnclaimedRewardsUIData }
	},
	"/lol-game-client-chat/v1/buddies": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-game-client-chat/v1/ignored-summoners": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-game-client-chat/v1/muted-summoners": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-game-client-chat/v2/buddies": {
		get: { Parameters: [], Body: never, Response: LolGameClientChatBuddy[] }
	},
	"/lol-game-client-chat/v2/ignored-players": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-game-client-chat/v2/muted-players": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-game-queues/v1/custom": {
		get: { Parameters: [], Body: never, Response: LolGameQueuesQueueCustomGame }
	},
	"/lol-game-queues/v1/custom-non-default": {
		get: { Parameters: [], Body: never, Response: LolGameQueuesQueueCustomGame }
	},
	"/lol-game-queues/v1/game-type-config/{gameTypeConfigId}": {
		get: { Parameters: [gameTypeConfigId: number], Body: never, Response: LolGameQueuesQueueGameTypeConfig }
	},
	"/lol-game-queues/v1/game-type-config/{gameTypeConfigId}/map/{mapId}": {
		get: { Parameters: [gameTypeConfigId: number, mapId: number], Body: never, Response: LolGameQueuesQueueGameTypeConfig }
	},
	"/lol-game-queues/v1/queues": {
		get: { Parameters: [], Body: never, Response: LolGameQueuesQueue[] }
	},
	"/lol-game-queues/v1/queues/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolGameQueuesQueue }
	},
	"/lol-game-queues/v1/queues/type/{queueType}": {
		get: { Parameters: [queueType: string], Body: never, Response: LolGameQueuesQueue }
	},
	"/lol-game-settings/v1/didreset": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-game-settings/v1/game-settings": {
		get: { Parameters: [], Body: never, Response: unknown }
		patch: { Parameters: [], Body: unknown, Response: unknown }
	},
	"/lol-game-settings/v1/game-settings-schema": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-game-settings/v1/input-settings": {
		get: { Parameters: [], Body: never, Response: unknown }
		patch: { Parameters: [], Body: unknown, Response: unknown }
	},
	"/lol-game-settings/v1/input-settings-schema": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-game-settings/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/active-patcher-lock": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/availability": {
		get: { Parameters: [], Body: never, Response: LolGameflowGameflowAvailability }
	},
	"/lol-gameflow/v1/basic-tutorial": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/battle-training": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/early-exit-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/early-exit-quit-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/extra-game-client-args": {
		get: { Parameters: [], Body: never, Response: string[] }
		post: { Parameters: [], Body: string[], Response: void }
	},
	"/lol-gameflow/v1/gameflow-metadata/player-status": {
		get: { Parameters: [], Body: never, Response: LolGameflowPlayerStatus }
		post: { Parameters: [], Body: LolGameflowPlayerStatus, Response: void }
	},
	"/lol-gameflow/v1/gameflow-metadata/registration-status": {
		get: { Parameters: [], Body: never, Response: LolGameflowRegistrationStatus }
		post: { Parameters: [], Body: LolGameflowRegistrationStatus, Response: void }
	},
	"/lol-gameflow/v1/gameflow-phase": {
		get: { Parameters: [], Body: never, Response: LolGameflowGameflowPhase }
	},
	"/lol-gameflow/v1/session": {
		get: { Parameters: [], Body: never, Response: LolGameflowGameflowSession }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/disallowed": {
		get: { Parameters: [], Body: never, Response: Record<string, LolGameflowGameModeSpellList> }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/disallowed/as-string": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/required": {
		get: { Parameters: [], Body: never, Response: Record<string, LolGameflowGameModeSpellList> }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/required/as-string": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-gameflow/v1/spectate": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/spectate/delayed-launch": {
		get: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/watch": {
		get: { Parameters: [], Body: never, Response: LolGameflowGameflowWatchPhase }
	},
	"/lol-geoinfo/v1/getlocation": {
		get: { Parameters: [params: { "ip_address": string }], Body: never, Response: LolGeoinfoGeoInfo }
	},
	"/lol-geoinfo/v1/whereami": {
		get: { Parameters: [], Body: never, Response: LolGeoinfoGeoInfoResponse }
	},
	"/lol-highlights/v1/config": {
		get: { Parameters: [], Body: never, Response: LolHighlightsHighlightsConfig }
	},
	"/lol-highlights/v1/highlights": {
		get: { Parameters: [], Body: never, Response: LolHighlightsHighlight[] }
		post: { Parameters: [], Body: never, Response: LolHighlightsHighlight[] }
	},
	"/lol-highlights/v1/highlights-folder-path": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-highlights/v1/highlights-folder-path/default": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-honeyfruit/v1/account-claim/account-status/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LolHoneyfruitAccountClaimStatus }
	},
	"/lol-honeyfruit/v1/account-claim/auto-dismiss": {
		get: { Parameters: [], Body: never, Response: boolean }
		put: { Parameters: [], Body: boolean, Response: unknown }
	},
	"/lol-honeyfruit/v1/linking-settings-button-available": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-honeyfruit/v1/vng-publisher-settings": {
		get: { Parameters: [], Body: never, Response: LolHoneyfruitHoneyfruitVNGPublisherSettings }
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-honor-v2/v1/ballot": {
		get: { Parameters: [], Body: never, Response: LolHonorV2Ballot }
	},
	"/lol-honor-v2/v1/config": {
		get: { Parameters: [], Body: never, Response: LolHonorV2HonorConfig }
	},
	"/lol-honor-v2/v1/late-recognition": {
		get: { Parameters: [], Body: never, Response: LolHonorV2Honor[] }
	},
	"/lol-honor-v2/v1/latest-eligible-game": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-honor-v2/v1/level-change": {
		get: { Parameters: [], Body: never, Response: LolHonorV2VendedHonorChange }
	},
	"/lol-honor-v2/v1/mutual-honor": {
		get: { Parameters: [], Body: never, Response: LolHonorV2MutualHonor }
	},
	"/lol-honor-v2/v1/profile": {
		get: { Parameters: [], Body: never, Response: LolHonorV2ProfileInfo }
	},
	"/lol-honor-v2/v1/recognition": {
		get: { Parameters: [], Body: never, Response: LolHonorV2Honor[] }
	},
	"/lol-honor-v2/v1/recognition-history": {
		get: { Parameters: [], Body: never, Response: LolHonorV2HonorInteraction[] }
	},
	"/lol-honor-v2/v1/reward-granted": {
		get: { Parameters: [], Body: never, Response: LolHonorV2VendedReward }
	},
	"/lol-honor-v2/v1/team-choices": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-honor-v2/v1/vote-completion": {
		get: { Parameters: [], Body: never, Response: LolHonorV2VoteCompletion }
	},
	"/lol-hovercard/v1/friend-info/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LolHovercardHovercardUserInfo }
	},
	"/lol-hovercard/v1/friend-info-by-summoner/{summonerId}": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolHovercardHovercardUserInfo }
	},
	"/lol-inventory/v1/champSelectInventory": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-inventory/v1/initial-configuration-complete": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-inventory/v1/inventory": {
		get: { Parameters: [params: { "inventoryTypes": string[] }], Body: never, Response: LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/inventory/emotes": {
		get: { Parameters: [], Body: never, Response: LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/inventoryWithF2P": {
		get: { Parameters: [params: { "inventoryTypes": string[] }], Body: never, Response: LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/notifications/{inventoryType}": {
		get: { Parameters: [inventoryType: string], Body: never, Response: LolInventoryInventoryNotification[] }
	},
	"/lol-inventory/v1/players/{puuid}/inventory": {
		get: { Parameters: [puuid: string, params: { "inventoryTypes": string[] }], Body: never, Response: LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/signedInventory": {
		get: { Parameters: [params: { "inventoryTypes": string[] }], Body: never, Response: Record<string, string> }
	},
	"/lol-inventory/v1/signedInventoryCache": {
		get: { Parameters: [], Body: never, Response: Record<string, LolInventoryInventoryCacheEntry> }
	},
	"/lol-inventory/v1/signedInventory/simple": {
		get: { Parameters: [params: { "inventoryTypes": string[], "queryParams"?: Record<string, string> }], Body: never, Response: string }
	},
	"/lol-inventory/v1/signedInventory/tournamentlogos": {
		get: { Parameters: [], Body: never, Response: Record<string, string> }
	},
	"/lol-inventory/v1/signedWallet": {
		get: { Parameters: [params: { "currencyTypes": string[] }], Body: never, Response: Record<string, string> }
	},
	"/lol-inventory/v1/signedWallet/{currencyType}": {
		get: { Parameters: [currencyType: string], Body: never, Response: Record<string, string> }
	},
	"/lol-inventory/v1/wallet": {
		get: { Parameters: [params: { "currencyTypes": string[] }], Body: never, Response: Record<string, number> }
	},
	"/lol-inventory/v1/wallet/{currencyType}": {
		get: { Parameters: [currencyType: string], Body: never, Response: Record<string, number> }
	},
	"/lol-inventory/v1/xbox-subscription-status": {
		get: { Parameters: [], Body: never, Response: LolInventoryXboxSubscriptionStatus }
	},
	"/lol-inventory/v2/inventory/{inventoryType}": {
		get: { Parameters: [inventoryType: string], Body: never, Response: LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-item-sets/v1/item-sets/{summonerId}/sets": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolItemSetsItemSets }
		post: { Parameters: [summonerId: number], Body: LolItemSetsItemSet, Response: void }
		put: { Parameters: [summonerId: number], Body: LolItemSetsItemSets, Response: void }
	},
	"/lol-kickout/v1/notification": {
		get: { Parameters: [], Body: never, Response: LolKickoutKickoutMessage }
	},
	"/lol-kr-playtime-reminder/v1/message": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-kr-playtime-reminder/v1/playtime": {
		get: { Parameters: [], Body: never, Response: LolKrPlaytimeReminderPlaytimeReminder }
	},
	"/lol-kr-shutdown-law/v1/custom-status": {
		get: { Parameters: [], Body: never, Response: LolKrShutdownLawQueueShutdownStatus }
	},
	"/lol-kr-shutdown-law/v1/disabled-queues": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-kr-shutdown-law/v1/is-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-kr-shutdown-law/v1/notification": {
		get: { Parameters: [], Body: never, Response: LolKrShutdownLawShutdownLawNotification }
	},
	"/lol-kr-shutdown-law/v1/queue-status/{queue_id}": {
		get: { Parameters: [queue_id: number], Body: never, Response: LolKrShutdownLawQueueShutdownStatus }
	},
	"/lol-kr-shutdown-law/v1/rating-screen": {
		get: { Parameters: [], Body: never, Response: LolKrShutdownLawRatingScreenInfo }
	},
	"/lol-kr-shutdown-law/v1/status": {
		get: { Parameters: [], Body: never, Response: LolKrShutdownLawAllQueueShutdownStatus }
	},
	"/lol-league-session/v1/league-session-token": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-leaver-buster/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LolLeaverBusterLeaverBusterNotificationResource[] }
	},
	"/lol-leaver-buster/v1/ranked-restriction": {
		get: { Parameters: [], Body: never, Response: LolLeaverBusterRankedRestrictionInfo }
	},
	"/lol-license-agreement/v1/agreement": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-license-agreement/v1/agreements": {
		get: { Parameters: [], Body: never, Response: LolLicenseAgreementLicenseAgreement[] }
	},
	"/lol-license-agreement/v1/all-agreements": {
		get: { Parameters: [], Body: never, Response: LolLicenseAgreementLicenseAgreement[] }
	},
	"/lol-license-agreement/v1/privacy-policy": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-license-agreement/v1/serve-location": {
		get: { Parameters: [], Body: never, Response: LolLicenseAgreementLicenseServeLocation }
	},
	"/lol-loadouts/v1/loadouts-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-loadouts/v4/loadouts/{loadoutId}": {
		get: { Parameters: [loadoutId: string], Body: never, Response: LolLoadoutsScopedLoadout }
	},
	"/lol-loadouts/v4/loadouts/scope/account": {
		get: { Parameters: [], Body: never, Response: LolLoadoutsScopedLoadout[] }
	},
	"/lol-loadouts/v4/loadouts/scope/{scope}/{scopeItemId}": {
		get: { Parameters: [scope: string, scopeItemId: number], Body: never, Response: LolLoadoutsScopedLoadout[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/bannable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/current-champion": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-lobby-team-builder/champ-select/v1/disabled-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/has-auto-assigned-smite": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/implementation-active": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/pickable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/pickable-skin-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/preferences": {
		get: { Parameters: [], Body: never, Response: LolLobbyTeamBuilderChampionSelectPreferences }
	},
	"/lol-lobby-team-builder/champ-select/v1/sending-loadouts-gcos-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/session": {
		get: { Parameters: [], Body: never, Response: LolLobbyTeamBuilderChampSelectSession }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/my-selection": {
		get: { Parameters: [], Body: never, Response: LolLobbyTeamBuilderChampSelectPlayerSelection }
		patch: { Parameters: [], Body: LolLobbyTeamBuilderChampSelectMySelection, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/obfuscated-summoner-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps": {
		get: { Parameters: [], Body: never, Response: LolLobbyTeamBuilderChampSelectSwapContract[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolLobbyTeamBuilderChampSelectSwapContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/timer": {
		get: { Parameters: [], Body: never, Response: LolLobbyTeamBuilderChampSelectTimer }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades": {
		get: { Parameters: [], Body: never, Response: LolLobbyTeamBuilderChampSelectTradeContract[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolLobbyTeamBuilderChampSelectTradeContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/team-boost": {
		get: { Parameters: [], Body: never, Response: LolLobbyTeamBuilderTeamBoost }
	},
	"/lol-lobby-team-builder/v1/matchmaking": {
		get: { Parameters: [], Body: never, Response: LolLobbyTeamBuilderMatchmakingSearchResource }
	},
	"/lol-lobby/v1/autofill-displayed": {
		get: { Parameters: [], Body: never, Response: boolean }
		put: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v1/custom-games": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyCustomGame[] }
	},
	"/lol-lobby/v1/custom-games/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolLobbyLobbyCustomGame }
	},
	"/lol-lobby/v1/lobby/availability": {
		get: { Parameters: [], Body: never, Response: LolLobbyQueueAvailability }
	},
	"/lol-lobby/v1/lobby/countdown": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-lobby/v1/lobby/invitations": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyInvitation[] }
		post: { Parameters: [], Body: LolLobbyLobbyInvitation, Response: LolLobbyLobbyInvitation }
	},
	"/lol-lobby/v1/lobby/invitations/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LolLobbyLobbyInvitation }
	},
	"/lol-lobby/v1/lobby/members/localMember/player-slots": {
		get: { Parameters: [], Body: never, Response: LolLobbyQuickPlayPresetSlotDto[] }
		put: { Parameters: [], Body: LolLobbyQuickPlayPresetSlotDto[], Response: unknown }
	},
	"/lol-lobby/v1/lobby/tft-ranked-history": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v1/parties/gamemode": {
		get: { Parameters: [], Body: never, Response: LolLobbyGameModeDto }
	},
	"/lol-lobby/v1/parties/player": {
		get: { Parameters: [], Body: never, Response: LolLobbyPlayerDto }
	},
	"/lol-lobby/v1/party-rewards": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyPartyRewards }
	},
	"/lol-lobby/v2/comms/members": {
		get: { Parameters: [], Body: never, Response: LolLobbyPremadePartyDto }
	},
	"/lol-lobby/v2/comms/token": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-lobby/v2/eligibility/game-select-eligibility-hash": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-lobby/v2/eligibility/initial-configuration-complete": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v2/lobby/custom/available-bots": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyBotChampion[] }
	},
	"/lol-lobby/v2/lobby/custom/bots-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v2/lobby/invitations": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyInvitationDto[] }
		post: { Parameters: [], Body: LolLobbyLobbyInvitationDto[], Response: LolLobbyLobbyInvitationDto[] }
	},
	"/lol-lobby/v2/lobby/matchmaking/search-state": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyMatchmakingSearchResource }
	},
	"/lol-lobby/v2/lobby/members": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyParticipantDto[] }
	},
	"/lol-lobby/v2/notifications": {
		get: { Parameters: [], Body: never, Response: LolLobbyLobbyNotification[] }
		post: { Parameters: [], Body: LolLobbyLobbyNotification, Response: void }
	},
	"/lol-lobby/v2/party-active": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v2/party/eog-status": {
		get: { Parameters: [], Body: never, Response: LolLobbyPartyStatusDto }
	},
	"/lol-lobby/v2/received-invitations": {
		get: { Parameters: [], Body: never, Response: LolLobbyReceivedInvitationDto[] }
	},
	"/lol-lobby/v2/registration-status": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-login/v1/account-state": {
		get: { Parameters: [], Body: never, Response: LolLoginAccountStateResource }
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-login/v1/login-connection-state": {
		get: { Parameters: [], Body: never, Response: LolLoginLoginConnectionState }
	},
	"/lol-login/v1/login-data-packet": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-login/v1/login-in-game-creds": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-login/v1/login-platform-credentials": {
		get: { Parameters: [], Body: never, Response: LolLoginPlatformGeneratedCredentials }
	},
	"/lol-login/v1/login-queue-state": {
		get: { Parameters: [], Body: never, Response: LolLoginLoginQueue }
	},
	"/lol-login/v1/wallet": {
		get: { Parameters: [], Body: never, Response: LolLoginLoginSessionWallet }
	},
	"/lol-login/v2/league-session-init-token": {
		get: { Parameters: [], Body: never, Response: LolLoginLeagueSessionTokenEnvelope }
	},
	"/lol-loot/v1/currency-configuration": {
		get: { Parameters: [], Body: never, Response: void }
	},
	"/lol-loot/v1/enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-loot/v1/loot-grants": {
		get: { Parameters: [], Body: never, Response: LolLootLootGrantNotification[] }
	},
	"/lol-loot/v1/loot-items": {
		get: { Parameters: [], Body: never, Response: LolLootLootItem[] }
	},
	"/lol-loot/v1/loot-odds/{recipeName}": {
		get: { Parameters: [recipeName: string], Body: never, Response: LolLootVerboseLootOddsResponse }
	},
	"/lol-loot/v1/mass-disenchant/configuration": {
		get: { Parameters: [], Body: never, Response: LolLootMassDisenchantClientConfig }
	},
	"/lol-loot/v1/mass-disenchant-recipes": {
		get: { Parameters: [], Body: never, Response: LootLcdsRecipeClientDTO[] }
	},
	"/lol-loot/v1/milestones": {
		get: { Parameters: [params: { "minimizeResponse": boolean }], Body: never, Response: LolLootLootMilestones[] }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}": {
		get: { Parameters: [lootMilestonesId: string], Body: never, Response: LolLootLootMilestones }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/claimProgress": {
		get: { Parameters: [lootMilestonesId: string], Body: never, Response: LolLootLootMilestonesClaimResponse }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/counter": {
		get: { Parameters: [lootMilestonesId: string], Body: never, Response: LolLootLootMilestonesCounter }
	},
	"/lol-loot/v1/milestones/counters": {
		get: { Parameters: [], Body: never, Response: LolLootLootMilestonesCounter[] }
	},
	"/lol-loot/v1/milestones/items": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-loot/v1/player-display-categories": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-loot/v1/player-loot": {
		get: { Parameters: [], Body: never, Response: LolLootPlayerLoot[] }
	},
	"/lol-loot/v1/player-loot/{lootId}": {
		get: { Parameters: [lootId: string], Body: never, Response: LolLootPlayerLoot }
	},
	"/lol-loot/v1/player-loot/{lootId}/context-menu": {
		get: { Parameters: [lootId: string], Body: never, Response: LolLootContextMenu[] }
		post: { Parameters: [lootId: string], Body: never, Response: LolLootContextMenu[] }
	},
	"/lol-loot/v1/player-loot-map": {
		get: { Parameters: [], Body: never, Response: Record<string, LolLootPlayerLoot> }
	},
	"/lol-loot/v1/player-loot-notifications": {
		get: { Parameters: [], Body: never, Response: LolLootPlayerLootNotification[] }
	},
	"/lol-loot/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-loot/v1/recipes/configuration": {
		get: { Parameters: [], Body: never, Response: void }
	},
	"/lol-loot/v1/recipes/initial-item/{lootId}": {
		get: { Parameters: [lootId: string], Body: never, Response: LolLootRecipeWithMilestones[] }
		post: { Parameters: [lootId: string], Body: never, Response: LolLootRecipeWithMilestones[] }
	},
	"/lol-loot/v2/player-loot-map": {
		get: { Parameters: [], Body: never, Response: LolLootPlayerLootMap }
	},
	"/lol-loyalty/v1/status-notification": {
		get: { Parameters: [], Body: never, Response: LolLoyaltyLoyaltyStatusNotification }
	},
	"/lol-maps/v1/map/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolMapsMaps }
	},
	"/lol-maps/v1/maps": {
		get: { Parameters: [], Body: never, Response: LolMapsMaps[] }
	},
	"/lol-maps/v2/map/{id}/{gameMode}": {
		get: { Parameters: [id: number, gameMode: string], Body: never, Response: LolMapsMaps }
	},
	"/lol-maps/v2/map/{id}/{gameMode}/{gameMutator}": {
		get: { Parameters: [id: number, gameMode: string, gameMutator: string], Body: never, Response: LolMapsMaps }
	},
	"/lol-maps/v2/maps": {
		get: { Parameters: [], Body: never, Response: LolMapsMaps[] }
	},
	"/lol-marketing-preferences/v1/partition/{partitionKey}": {
		get: { Parameters: [partitionKey: string], Body: never, Response: Record<string, string> }
		post: { Parameters: [partitionKey: string], Body: Record<string, string>, Response: Record<string, string> }
	},
	"/lol-marketing-preferences/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-match-history/v1/delta": {
		get: { Parameters: [], Body: never, Response: LolMatchHistoryMatchHistoryPlayerDelta }
	},
	"/lol-match-history/v1/game-timelines/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: LolMatchHistoryMatchHistoryTimelineFrames }
	},
	"/lol-match-history/v1/games/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: LolMatchHistoryMatchHistoryGame }
	},
	"/lol-match-history/v1/products/lol/{puuid}/matches": {
		get: { Parameters: [puuid: string, params?: { "begIndex"?: number, "endIndex"?: number }], Body: never, Response: LolMatchHistoryMatchHistoryList }
	},
	"/lol-match-history/v1/products/lol/current-summoner/matches": {
		get: { Parameters: [params?: { "begIndex"?: number, "endIndex"?: number }], Body: never, Response: LolMatchHistoryMatchHistoryList }
	},
	"/lol-match-history/v1/products/tft/{puuid}/matches": {
		get: { Parameters: [puuid: string, params?: { "begin"?: number, "count"?: number, "tag"?: string }], Body: never, Response: LolMatchHistoryGAMHSMatchHistoryList }
	},
	"/lol-match-history/v1/recently-played-summoners": {
		get: { Parameters: [], Body: never, Response: LolMatchHistoryRecentlyPlayedSummoner[] }
	},
	"/lol-match-history/v1/web-url": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-match-history/v3/matchlist/account/{accountId}": {
		get: { Parameters: [accountId: number, params?: { "begIndex"?: number, "endIndex"?: number }], Body: never, Response: LolMatchHistoryMatchHistoryList }
	},
	"/lol-matchmaking/v1/ready-check": {
		get: { Parameters: [], Body: never, Response: LolMatchmakingMatchmakingReadyCheckResource }
	},
	"/lol-matchmaking/v1/search/errors": {
		get: { Parameters: [], Body: never, Response: LolMatchmakingMatchmakingSearchErrorResource[] }
	},
	"/lol-matchmaking/v1/search/errors/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolMatchmakingMatchmakingSearchErrorResource }
	},
	"/lol-missions/v1/data": {
		get: { Parameters: [], Body: never, Response: PlayerMissionEligibilityData }
	},
	"/lol-missions/v1/missions": {
		get: { Parameters: [], Body: never, Response: PlayerMissionDTO[] }
	},
	"/lol-missions/v1/series": {
		get: { Parameters: [], Body: never, Response: SeriesDTO[] }
	},
	"/lol-npe-rewards/v1/challenges/progress": {
		get: { Parameters: [], Body: never, Response: LolNpeRewardsChallengesProgress }
	},
	"/lol-npe-rewards/v1/level-rewards": {
		get: { Parameters: [], Body: never, Response: LolNpeRewardsRewardSeries }
	},
	"/lol-npe-rewards/v1/level-rewards/state": {
		get: { Parameters: [], Body: never, Response: LolNpeRewardsRewardSeriesState }
	},
	"/lol-npe-rewards/v1/login-rewards": {
		get: { Parameters: [], Body: never, Response: LolNpeRewardsRewardSeries }
	},
	"/lol-npe-rewards/v1/login-rewards/state": {
		get: { Parameters: [], Body: never, Response: LolNpeRewardsRewardSeriesState }
	},
	"/lol-npe-tutorial-path/v1/rewards/champ": {
		get: { Parameters: [], Body: never, Response: LolNpeTutorialPathCollectionsChampion }
	},
	"/lol-npe-tutorial-path/v1/settings": {
		get: { Parameters: [], Body: never, Response: LolNpeTutorialPathAccountSettingsTutorial }
		put: { Parameters: [], Body: LolNpeTutorialPathAccountSettingsTutorial, Response: void }
	},
	"/lol-npe-tutorial-path/v1/tutorials": {
		get: { Parameters: [], Body: never, Response: LolNpeTutorialPathTutorial[] }
	},
	"/lol-patch/v1/checking-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-patch/v1/environment": {
		get: { Parameters: [], Body: never, Response: LolPatchChunkingPatcherEnvironment }
	},
	"/lol-patch/v1/game-version": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-patch/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LolPatchNotification[] }
	},
	"/lol-patch/v1/products/league_of_legends/install-location": {
		get: { Parameters: [], Body: never, Response: LolPatchInstallPaths }
	},
	"/lol-patch/v1/products/league_of_legends/state": {
		get: { Parameters: [], Body: never, Response: LolPatchProductState }
	},
	"/lol-patch/v1/products/league_of_legends/supported-game-releases": {
		get: { Parameters: [], Body: never, Response: LolPatchSupportedGameReleases }
	},
	"/lol-patch/v1/status": {
		get: { Parameters: [], Body: never, Response: LolPatchStatus }
	},
	"/lol-perks/v1/currentpage": {
		get: { Parameters: [], Body: never, Response: LolPerksPerkPageResource }
		put: { Parameters: [], Body: number, Response: unknown }
	},
	"/lol-perks/v1/inventory": {
		get: { Parameters: [], Body: never, Response: LolPerksPlayerInventory }
	},
	"/lol-perks/v1/perks": {
		get: { Parameters: [], Body: never, Response: LolPerksPerkUIPerk[] }
	},
	"/lol-perks/v1/perks/disabled": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-perks/v1/perks/gameplay-updated": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-perks/v1/quick-play-selections/champion/{championId}/position/{position}": {
		get: { Parameters: [championId: number, position: string], Body: never, Response: string }
	},
	"/lol-perks/v1/recommended-pages/champion/{championId}/position/{position}/map/{mapId}": {
		get: { Parameters: [championId: number, position: string, mapId: number], Body: never, Response: LolPerksPerkUIRecommendedPage[] }
	},
	"/lol-perks/v1/recommended-pages-position/champion/{championId}": {
		get: { Parameters: [championId: number], Body: never, Response: string }
	},
	"/lol-perks/v1/rune-recommender-auto-select": {
		get: { Parameters: [], Body: never, Response: boolean }
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-perks/v1/settings": {
		get: { Parameters: [], Body: never, Response: LolPerksUISettings }
		put: { Parameters: [], Body: LolPerksUISettings, Response: unknown }
	},
	"/lol-perks/v1/show-auto-modified-pages-notification": {
		get: { Parameters: [], Body: never, Response: boolean }
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-perks/v1/styles": {
		get: { Parameters: [], Body: never, Response: LolPerksPerkUIStyle[] }
	},
	"/lol-pft/v2/survey": {
		get: { Parameters: [], Body: never, Response: LolPftPFTSurvey }
		post: { Parameters: [], Body: LolPftPFTSurvey, Response: void }
	},
	"/lol-platform-config/v1/initial-configuration-complete": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-platform-config/v1/namespaces": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-platform-config/v1/namespaces/{ns}": {
		get: { Parameters: [ns: string], Body: never, Response: unknown }
	},
	"/lol-platform-config/v1/namespaces/{ns}/{key}": {
		get: { Parameters: [ns: string, key: string], Body: never, Response: unknown }
	},
	"/lol-player-behavior/v1/ban": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorBanNotification }
	},
	"/lol-player-behavior/v1/chat-restriction": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorRestrictionNotification }
	},
	"/lol-player-behavior/v1/config": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorPlayerBehaviorConfig }
	},
	"/lol-player-behavior/v1/ranked-restriction": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorRestrictionNotification }
	},
	"/lol-player-behavior/v1/reform-card": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorReformCard }
	},
	"/lol-player-behavior/v1/reporter-feedback": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorReporterFeedback[] }
	},
	"/lol-player-behavior/v2/reform-card": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorReformCardV2 }
	},
	"/lol-player-behavior/v2/reporter-feedback": {
		get: { Parameters: [], Body: never, Response: LolPlayerBehaviorReporterFeedbackMessage[] }
	},
	"/lol-player-behavior/v3/reform-cards": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-player-level-up/v1/level-up": {
		get: { Parameters: [], Body: never, Response: LolPlayerLevelUpPlayerLevelUpEvent }
	},
	"/lol-player-level-up/v1/level-up-notifications/{pluginName}": {
		get: { Parameters: [pluginName: string], Body: never, Response: LolPlayerLevelUpPlayerLevelUpEventAck }
		post: { Parameters: [pluginName: string], Body: LolPlayerLevelUpPlayerLevelUpEventAck, Response: void }
	},
	"/lol-player-messaging/v1/celebration/notification": {
		get: { Parameters: [], Body: never, Response: LolPlayerMessagingDynamicCelebrationMessagingNotificationResource }
	},
	"/lol-player-messaging/v1/notification": {
		get: { Parameters: [], Body: never, Response: LolPlayerMessagingPlayerMessagingNotificationResource }
	},
	"/lol-player-name-transition/v1/modal-state": {
		get: { Parameters: [], Body: never, Response: LolPlayerNameTransitionPlayerNameTransitionModal }
	},
	"/lol-player-preferences/v1/player-preferences-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-player-preferences/v1/preference/{type}": {
		get: { Parameters: [type: string], Body: never, Response: unknown }
	},
	"/lol-player-report-sender/v1/in-game-reports": {
		get: { Parameters: [], Body: never, Response: LolPlayerReportSenderPlayerReport[] }
		post: { Parameters: [], Body: LolPlayerReportSenderPlayerReport, Response: unknown }
	},
	"/lol-pre-end-of-game/v1/currentSequenceEvent": {
		get: { Parameters: [], Body: never, Response: LolPreEndOfGameSequenceEvent }
	},
	"/lol-premade-voice/v1/availability": {
		get: { Parameters: [], Body: never, Response: LolPremadeVoiceVoiceAvailability }
	},
	"/lol-premade-voice/v1/capturedevices": {
		get: { Parameters: [], Body: never, Response: LolPremadeVoiceDeviceResource[] }
		put: { Parameters: [], Body: string, Response: void }
	},
	"/lol-premade-voice/v1/first-experience": {
		get: { Parameters: [], Body: never, Response: LolPremadeVoiceFirstExperience }
	},
	"/lol-premade-voice/v1/participant-records": {
		get: { Parameters: [], Body: never, Response: LolPremadeVoicePremadeVoiceParticipantDto[] }
	},
	"/lol-premade-voice/v1/participants": {
		get: { Parameters: [], Body: never, Response: LolPremadeVoicePremadeVoiceParticipantDto[] }
	},
	"/lol-premade-voice/v1/settings": {
		get: { Parameters: [], Body: never, Response: LolPremadeVoiceSettingsResource }
	},
	"/lol-progression/v1/groups/{groupId}/configuration": {
		get: { Parameters: [groupId: string], Body: never, Response: LolProgressionGroup }
	},
	"/lol-progression/v1/groups/{groupId}/instanceData": {
		get: { Parameters: [groupId: string], Body: never, Response: LolProgressionEntityInstance }
	},
	"/lol-progression/v1/groups/configuration": {
		get: { Parameters: [], Body: never, Response: LolProgressionGroup[] }
	},
	"/lol-progression/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-publishing-content/v1/listeners/allow-list/{region}": {
		get: { Parameters: [region: string], Body: never, Response: string[] }
	},
	"/lol-publishing-content/v1/listeners/client-data": {
		get: { Parameters: [], Body: never, Response: LolPublishingContentClientData }
	},
	"/lol-publishing-content/v1/listeners/pubhub-config": {
		get: { Parameters: [], Body: never, Response: LolPublishingContentPubHubConfig }
	},
	"/lol-publishing-content/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-publishing-content/v1/settings": {
		get: { Parameters: [], Body: never, Response: LolPublishingContentPublishingSettings }
	},
	"/lol-publishing-content/v1/tft-hub-cards": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-purchase-widget/v1/configuration": {
		get: { Parameters: [], Body: never, Response: LolPurchaseWidgetPurchaseWidgetConfig }
	},
	"/lol-purchase-widget/v1/order-notifications": {
		get: { Parameters: [], Body: never, Response: LolPurchaseWidgetOrderNotificationResource[] }
	},
	"/lol-purchase-widget/v1/purchasable-item": {
		get: { Parameters: [params: { "inventoryType": string, "itemId": number }], Body: never, Response: LolPurchaseWidgetPurchasableItem }
	},
	"/lol-purchase-widget/v3/base-skin-line-data/{offerId}": {
		get: { Parameters: [offerId: string], Body: never, Response: LolPurchaseWidgetBaseSkinLineDto }
	},
	"/lol-purchase-widget/v3/purchase-offer-order-statuses": {
		get: { Parameters: [], Body: never, Response: LolPurchaseWidgetPurchaseOfferOrderStatuses }
	},
	"/lol-ranked/v1/apex-leagues/{queueType}/{tier}": {
		get: { Parameters: [queueType: LolRankedLeagueQueueType, tier: string], Body: never, Response: LolRankedLeagueLadderInfo }
	},
	"/lol-ranked/v1/challenger-ladders-enabled": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-ranked/v1/current-lp-change-notification": {
		get: { Parameters: [], Body: never, Response: LolRankedLcuLeagueNotification }
	},
	"/lol-ranked/v1/current-ranked-stats": {
		get: { Parameters: [], Body: never, Response: LolRankedRankedStats }
	},
	"/lol-ranked/v1/eligibleTiers/queueType/{queueType}": {
		get: { Parameters: [queueType: LolRankedLeagueQueueType], Body: never, Response: string[] }
	},
	"/lol-ranked/v1/eos-notifications": {
		get: { Parameters: [], Body: never, Response: LolRankedEosNotificationResource[] }
	},
	"/lol-ranked/v1/eos-rewards": {
		get: { Parameters: [], Body: never, Response: LolRankedEosRewardsConfig }
	},
	"/lol-ranked/v1/league-ladders/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LolRankedLeagueLadderInfo[] }
	},
	"/lol-ranked/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LolRankedLcuLeagueNotification[] }
	},
	"/lol-ranked/v1/ranked-stats/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LolRankedRankedStats }
	},
	"/lol-ranked/v1/rated-ladder/{queueType}": {
		get: { Parameters: [queueType: LolRankedLeagueQueueType], Body: never, Response: LolRankedRatedLadderInfo }
	},
	"/lol-ranked/v1/signed-ranked-stats": {
		get: { Parameters: [], Body: never, Response: LolRankedSignedRankedStatsDTO }
	},
	"/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids": {
		get: { Parameters: [params: { "queueType": LolRankedLeagueQueueType, "puuids": string[] }], Body: never, Response: Record<string, LolRankedSocialLeaderboardRankedQueueStats> }
	},
	"/lol-ranked/v1/splits-config": {
		get: { Parameters: [], Body: never, Response: LolRankedRewardsInfo }
	},
	"/lol-ranked/v1/top-rated-ladders-enabled": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-ranked/v2/tiers": {
		get: { Parameters: [params: { "summonerIds": number[], "queueTypes": LolRankedLeagueQueueType[] }], Body: never, Response: LolRankedParticipantTiers[] }
	},
	"/lol-regalia/v2/config": {
		get: { Parameters: [], Body: never, Response: LolRegaliaRegaliaFrontendConfig }
	},
	"/lol-regalia/v2/current-summoner/regalia": {
		get: { Parameters: [], Body: never, Response: LolRegaliaRegaliaWithPreferences }
		put: { Parameters: [], Body: LolRegaliaRegaliaPreferences, Response: LolRegaliaRegaliaWithPreferences }
	},
	"/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/positions/{position}/regalia": {
		get: { Parameters: [summonerId: number, queue: string, position: string], Body: never, Response: LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/regalia": {
		get: { Parameters: [summonerId: number, queue: string], Body: never, Response: LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/regalia": {
		get: { Parameters: [summonerId: number, params: { "hovercard": boolean }], Body: never, Response: LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/regalia/async": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolRegaliaRegaliaAsync }
	},
	"/lol-regalia/v3/inventory/{inventoryType}": {
		get: { Parameters: [inventoryType: string], Body: never, Response: Record<string, LolRegaliaRegaliaInventoryItem> }
	},
	"/lol-regalia/v3/summoners/{summonerId}/regalia": {
		get: { Parameters: [summonerId: number], Body: never, Response: LolRegaliaRegalia }
	},
	"/lol-replays/v1/configuration": {
		get: { Parameters: [], Body: never, Response: LolReplaysReplaysConfiguration }
	},
	"/lol-replays/v1/metadata/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: LolReplaysReplayMetadata }
	},
	"/lol-replays/v1/rofls/path": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-replays/v1/rofls/path/default": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-rewards/v1/grants": {
		get: { Parameters: [params?: { "status"?: LolRewardsGrantStatus }], Body: never, Response: LolRewardsRewardGrant[] }
	},
	"/lol-rewards/v1/groups": {
		get: { Parameters: [params?: { "types"?: string[] }], Body: never, Response: LolRewardsSvcRewardGroup[] }
	},
	"/lol-rms/v1/champion-mastery-leaveup-update": {
		get: { Parameters: [], Body: never, Response: LolRiotMessagingServiceChampionMasteryLevelUp[] }
	},
	"/lol-rso-auth/configuration/v3/ready-state": {
		get: { Parameters: [], Body: never, Response: LolRsoAuthRSOConfigReadyState }
	},
	"/lol-rso-auth/v1/authorization/access-token": {
		get: { Parameters: [], Body: never, Response: LolRsoAuthAccessToken }
	},
	"/lol-rso-auth/v1/authorization/error": {
		get: { Parameters: [], Body: never, Response: LolRsoAuthAuthError }
	},
	"/lol-rso-auth/v1/authorization/id-token": {
		get: { Parameters: [], Body: never, Response: LolRsoAuthIdToken }
	},
	"/lol-rso-auth/v1/authorization/userinfo": {
		get: { Parameters: [], Body: never, Response: LolRsoAuthUserInfo }
		post: { Parameters: [], Body: never, Response: LolRsoAuthUserInfo }
	},
	"/lol-rso-auth/v1/status/{platformId}": {
		get: { Parameters: [platformId: string], Body: never, Response: LolRsoAuthRegionStatus }
	},
	"/lol-seasons/v1/season/LOL/current-split-seasons": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-seasons/v1/season/product/{product}": {
		get: { Parameters: [product: string], Body: never, Response: LolSeasonsAllSeasonsProduct }
	},
	"/lol-seasons/v1/season/recent-final-split": {
		get: { Parameters: [], Body: never, Response: LolSeasonsAllSeasonsProduct }
	},
	"/lol-service-status/v1/lcu-status": {
		get: { Parameters: [], Body: never, Response: LolServiceStatusServiceStatusResource }
	},
	"/lol-service-status/v1/ticker-messages": {
		get: { Parameters: [], Body: never, Response: LolServiceStatusTickerMessage[] }
	},
	"/lol-settings/v1/account/{category}": {
		get: { Parameters: [category: string], Body: never, Response: unknown }
		put: { Parameters: [category: string], Body: LolSettingsSettingCategory, Response: unknown }
		patch: { Parameters: [category: string], Body: LolSettingsSettingCategory, Response: unknown }
	},
	"/lol-settings/v1/account/didreset": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-settings/v1/local/{category}": {
		get: { Parameters: [category: string], Body: never, Response: unknown }
		patch: { Parameters: [category: string], Body: LolSettingsSettingCategory, Response: unknown }
	},
	"/lol-settings/v2/account/{ppType}/{category}": {
		get: { Parameters: [ppType: string, category: string], Body: never, Response: unknown }
		put: { Parameters: [ppType: string, category: string], Body: LolSettingsSettingCategory, Response: unknown }
		patch: { Parameters: [ppType: string, category: string], Body: LolSettingsSettingCategory, Response: unknown }
	},
	"/lol-settings/v2/config": {
		get: { Parameters: [], Body: never, Response: LolSettingsSettingsConfig }
	},
	"/lol-settings/v2/didreset/{ppType}": {
		get: { Parameters: [ppType: string], Body: never, Response: boolean }
	},
	"/lol-settings/v2/local/{category}": {
		get: { Parameters: [category: string], Body: never, Response: unknown }
		patch: { Parameters: [category: string], Body: LolSettingsSettingCategory, Response: unknown }
	},
	"/lol-settings/v2/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-shutdown/v1/notification": {
		get: { Parameters: [], Body: never, Response: LolShutdownShutdownNotification }
	},
	"/lol-simple-dialog-messages/v1/messages": {
		get: { Parameters: [], Body: never, Response: LolSimpleDialogMessagesMessage[] }
		post: { Parameters: [], Body: LolSimpleDialogMessagesLocalMessageRequest, Response: unknown }
	},
	"/lol-social-leaderboard/v1/leaderboard-next-update-time": {
		get: { Parameters: [params?: { "queueType"?: LolSocialLeaderboardLeagueQueueType }], Body: never, Response: number }
	},
	"/lol-social-leaderboard/v1/social-leaderboard-data": {
		get: { Parameters: [params?: { "queueType"?: LolSocialLeaderboardLeagueQueueType }], Body: never, Response: LolSocialLeaderboardSocialLeaderboardData }
	},
	"/lol-spectator/v1/spectate": {
		get: { Parameters: [], Body: never, Response: LolSpectatorSpectateGameInfo }
	},
	"/lol-spectator/v1/spectate/config": {
		get: { Parameters: [], Body: never, Response: LolSpectatorSpectatorConfig }
	},
	"/lol-spectator/v3/buddy/spectate": {
		get: { Parameters: [], Body: never, Response: LolSpectatorSpectateResource }
		post: { Parameters: [], Body: string[], Response: void }
	},
	"/lol-statstones/v1/eog-notifications/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: LolStatstonesEogNotificationEnvelope }
	},
	"/lol-statstones/v1/featured-champion-statstones/{championItemId}": {
		get: { Parameters: [championItemId: number], Body: never, Response: LolStatstonesStatstone[] }
	},
	"/lol-statstones/v1/profile-summary/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LolStatstonesProfileStatstoneSummary[] }
	},
	"/lol-statstones/v1/statstone/{contentId}/owned": {
		get: { Parameters: [contentId: string], Body: never, Response: boolean }
	},
	"/lol-statstones/v1/statstones-enabled-queue-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-statstones/v2/player-statstones-self/{championItemId}": {
		get: { Parameters: [championItemId: number], Body: never, Response: LolStatstonesStatstoneSet[] }
	},
	"/lol-statstones/v2/player-summary-self": {
		get: { Parameters: [], Body: never, Response: LolStatstonesChampionStatstoneSummary[] }
	},
	"/lol-store/v1/alias-change-notifications": {
		get: { Parameters: [], Body: never, Response: LolStoreAliasChangeNotificationResource[] }
	},
	"/lol-store/v1/{pageType}": {
		get: { Parameters: [pageType: string], Body: never, Response: unknown }
	},
	"/lol-store/v1/catalog": {
		get: { Parameters: [params?: { "inventoryType"?: string[], "itemId"?: number[] }], Body: never, Response: LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalogByInstanceIds": {
		get: { Parameters: [params: { "instanceIds": string[] }], Body: never, Response: LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/{inventoryType}": {
		get: { Parameters: [inventoryType: string, params: { "itemIds": number[] }], Body: never, Response: LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/items/skip-cache": {
		get: { Parameters: [params: { "catalogItemKeys": LolStoreItemKey[] }], Body: never, Response: LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/sales": {
		get: { Parameters: [], Body: never, Response: LolStoreItemSale[] }
	},
	"/lol-store/v1/getStoreUrl": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-store/v1/giftablefriends": {
		get: { Parameters: [], Body: never, Response: LolStoreGiftingFriend[] }
	},
	"/lol-store/v1/itemKeysFromInstanceIds": {
		get: { Parameters: [params: { "instanceIds": string[] }], Body: never, Response: Record<string, LolStoreItemKey> }
	},
	"/lol-store/v1/itemKeysFromOfferIds": {
		get: { Parameters: [params: { "offerIds": string[] }], Body: never, Response: Record<string, LolStoreItemKey> }
	},
	"/lol-store/v1/lastPage": {
		get: { Parameters: [], Body: never, Response: string }
		post: { Parameters: [], Body: string, Response: void }
	},
	"/lol-store/v1/offers": {
		get: { Parameters: [params?: { "inventoryTypeUUIDs"?: string[] }], Body: never, Response: LolStoreCapOffer[] }
	},
	"/lol-store/v1/offers/{offerId}": {
		get: { Parameters: [offerId: string], Body: never, Response: LolStoreCapOffer }
	},
	"/lol-store/v1/order-notifications": {
		get: { Parameters: [], Body: never, Response: LolStoreOrderNotificationResource[] }
	},
	"/lol-store/v1/order-notifications/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolStoreOrderNotificationResource }
	},
	"/lol-store/v1/paymentDetails": {
		get: { Parameters: [params: { "action": string, "giftRecipientAccountId"?: number, "giftMessage"?: string }], Body: never, Response: unknown }
	},
	"/lol-store/v1/skins/{skinId}": {
		get: { Parameters: [skinId: number], Body: never, Response: LolStoreCatalogItem }
	},
	"/lol-store/v1/status": {
		get: { Parameters: [], Body: never, Response: LolStoreStoreStatus }
	},
	"/lol-store/v1/store-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-store/v2/offers": {
		get: { Parameters: [params?: { "typeId"?: string }], Body: never, Response: LolStoreCapOffer[] }
	},
	"/lol-suggested-players/v1/suggested-players": {
		get: { Parameters: [], Body: never, Response: LolSuggestedPlayersSuggestedPlayersSuggestedPlayer[] }
	},
	"/lol-summoner/v1/alias/lookup": {
		get: { Parameters: [params: { "gameName": string, "tagLine": string }], Body: never, Response: LolSummonerAliasLookupResponse }
	},
	"/lol-summoner/v1/check-name-availability/{name}": {
		get: { Parameters: [name: string], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/check-name-availability-new-summoners/{name}": {
		get: { Parameters: [name: string], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/current-summoner": {
		get: { Parameters: [], Body: never, Response: LolSummonerSummoner }
	},
	"/lol-summoner/v1/current-summoner/account-and-summoner-ids": {
		get: { Parameters: [], Body: never, Response: LolSummonerAccountIdAndSummonerId }
	},
	"/lol-summoner/v1/current-summoner/autofill": {
		get: { Parameters: [], Body: never, Response: LolSummonerAutoFillQueueDto[] }
	},
	"/lol-summoner/v1/current-summoner/jwt": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-summoner/v1/current-summoner/profile-privacy": {
		get: { Parameters: [], Body: never, Response: LolSummonerProfilePrivacy }
		put: { Parameters: [], Body: LolSummonerProfilePrivacySetting, Response: unknown }
	},
	"/lol-summoner/v1/current-summoner/rerollPoints": {
		get: { Parameters: [], Body: never, Response: LolSummonerSummonerRerollPoints }
	},
	"/lol-summoner/v1/current-summoner/summoner-profile": {
		get: { Parameters: [], Body: never, Response: unknown }
		post: { Parameters: [], Body: LolSummonerSummonerProfileUpdate, Response: unknown }
	},
	"/lol-summoner/v1/player-alias-state": {
		get: { Parameters: [], Body: never, Response: LolSummonerPlayerNameState }
	},
	"/lol-summoner/v1/player-name-mode": {
		get: { Parameters: [], Body: never, Response: LolSummonerPlayerNameMode }
	},
	"/lol-summoner/v1/profile-privacy-enabled": {
		get: { Parameters: [], Body: never, Response: LolSummonerProfilePrivacyEnabledState }
	},
	"/lol-summoner/v1/riot-alias-free-eligibility": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/riot-alias-purchase-eligibility": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/status": {
		get: { Parameters: [], Body: never, Response: LolSummonerStatus }
	},
	"/lol-summoner/v1/summoner-profile": {
		get: { Parameters: [params: { "puuid": string }], Body: never, Response: unknown }
	},
	"/lol-summoner/v1/summoner-requests-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/summoners": {
		get: { Parameters: [params: { "name": string }], Body: never, Response: LolSummonerSummoner }
		post: { Parameters: [], Body: LolSummonerSummonerRequestedName, Response: LolSummonerSummoner }
	},
	"/lol-summoner/v1/summoners/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LolSummonerSummoner }
	},
	"/lol-summoner/v1/summoners-by-puuid-cached/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LolSummonerSummoner }
	},
	"/lol-summoner/v2/summoner-icons": {
		get: { Parameters: [params: { "ids": number[] }], Body: never, Response: LolSummonerSummonerIdAndIcon[] }
	},
	"/lol-summoner/v2/summoner-names": {
		get: { Parameters: [params: { "ids": number[] }], Body: never, Response: LolSummonerSummonerIdAndName[] }
	},
	"/lol-summoner/v2/summoners": {
		get: { Parameters: [params?: { "ids"?: number[] }], Body: never, Response: LolSummonerSummoner[] }
	},
	"/lol-summoner/v2/summoners/puuid/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LolSummonerSummoner }
	},
	"/lol-tastes/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-tastes/v1/skins-model": {
		get: { Parameters: [], Body: never, Response: LolTastesDataModelResponse }
	},
	"/lol-tastes/v1/tft-overview-model": {
		get: { Parameters: [], Body: never, Response: LolTastesDataModelResponse }
	},
	"/lol-tft-pass/v1/battle-pass": {
		get: { Parameters: [], Body: never, Response: LolTftPassTftPaidBattlepass }
	},
	"/lol-tft-pass/v1/enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-tft-pass/v1/event-pass": {
		get: { Parameters: [], Body: never, Response: LolTftPassTftPaidBattlepass }
	},
	"/lol-tft-pass/v1/reward-notification": {
		get: { Parameters: [], Body: never, Response: LolTftPassTFTPassRewardNotification }
	},
	"/lol-tft-team-planner/v1/config": {
		get: { Parameters: [], Body: never, Response: LolTftTeamPlannerTFTTeamPlannerConfig }
	},
	"/lol-tft-team-planner/v1/ftue/hasViewed": {
		get: { Parameters: [], Body: never, Response: boolean }
		patch: { Parameters: [], Body: boolean, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/local": {
		get: { Parameters: [], Body: never, Response: LolTftTeamPlannerTeamSettings }
	},
	"/lol-tft-team-planner/v1/team/reminders": {
		get: { Parameters: [], Body: never, Response: boolean }
		patch: { Parameters: [], Body: boolean, Response: unknown }
	},
	"/lol-tft-troves/v1/banners": {
		get: { Parameters: [], Body: never, Response: LolTftTrovesTrovesBanner[] }
	},
	"/lol-tft-troves/v1/config": {
		get: { Parameters: [], Body: never, Response: LolTftTrovesTroves }
	},
	"/lol-tft-troves/v1/loot-odds/{dropTableId}": {
		get: { Parameters: [dropTableId: string], Body: never, Response: LolTftTrovesVerboseLootOddsResponse }
	},
	"/lol-tft-troves/v1/status-notifications": {
		get: { Parameters: [], Body: never, Response: void }
	},
	"/lol-tft/v1/tft/battlePassHub": {
		get: { Parameters: [], Body: never, Response: LolTftLolTftBattlePassHub }
	},
	"/lol-tft/v1/tft/directToHub": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-tft/v1/tft/events": {
		get: { Parameters: [], Body: never, Response: LolTftLolTftEvents }
	},
	"/lol-tft/v1/tft/homeHub": {
		get: { Parameters: [], Body: never, Response: LolTftLolTftHomeHub }
	},
	"/lol-tft/v1/tft/newsHub": {
		get: { Parameters: [], Body: never, Response: LolTftLolTftNewsHub }
	},
	"/lol-tft/v1/tft/promoButtons": {
		get: { Parameters: [], Body: never, Response: LolTftLolTftPromoButtons }
	},
	"/lol-tft/v1/tft/tencentEventhubConfigs": {
		get: { Parameters: [], Body: never, Response: LolTftLolTftTencentEventHubConfigs }
	},
	"/lol-tft/v2/tft/battlepass": {
		get: { Parameters: [], Body: never, Response: LolMissionsTftPaidBattlepass }
	},
	"/lol-trophies/v1/current-summoner/trophies/profile": {
		get: { Parameters: [], Body: never, Response: LolTrophiesTrophyProfileData }
	},
	"/lol-trophies/v1/players/{puuid}/trophies/profile": {
		get: { Parameters: [puuid: string], Body: never, Response: LolTrophiesTrophyProfileData }
	},
	"/lol-yourshop/v1/has-permissions": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-yourshop/v1/modal": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-yourshop/v1/offers": {
		get: { Parameters: [], Body: never, Response: LolYourshopUIOffer[] }
	},
	"/lol-yourshop/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-yourshop/v1/status": {
		get: { Parameters: [], Body: never, Response: LolYourshopUIStatus }
	},
	"/lol-yourshop/v1/themed": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/memory/v1/fe-processes-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/patcher/v1/notifications": {
		get: { Parameters: [], Body: never, Response: PatcherNotification[] }
		post: { Parameters: [], Body: PatcherNotificationId, Response: void }
	},
	"/patcher/v1/p2p/status": {
		get: { Parameters: [], Body: never, Response: PatcherP2PStatus }
		patch: { Parameters: [], Body: PatcherP2PStatusUpdate, Response: unknown }
	},
	"/patcher/v1/products": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/patcher/v1/products/{product-id}/paths": {
		get: { Parameters: [product_id: string], Body: never, Response: Record<string, string> }
	},
	"/patcher/v1/products/{product-id}/state": {
		get: { Parameters: [product_id: string], Body: never, Response: PatcherProductState }
	},
	"/patcher/v1/products/{product-id}/tags": {
		get: { Parameters: [product_id: string], Body: never, Response: Record<string, string> }
	},
	"/patcher/v1/status": {
		get: { Parameters: [], Body: never, Response: PatcherStatus }
	},
	"/performance/v1/memory": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/performance/v1/report": {
		get: { Parameters: [], Body: never, Response: unknown[] }
	},
	"/performance/v1/system-info": {
		get: { Parameters: [params?: { "full"?: number }], Body: never, Response: unknown }
	},
	"/player-notifications/v1/config": {
		get: { Parameters: [], Body: never, Response: PlayerNotificationsPlayerNotificationConfigResource }
		put: { Parameters: [], Body: PlayerNotificationsPlayerNotificationConfigResource, Response: PlayerNotificationsPlayerNotificationConfigResource }
	},
	"/player-notifications/v1/notifications": {
		get: { Parameters: [], Body: never, Response: PlayerNotificationsPlayerNotificationResource[] }
		post: { Parameters: [], Body: PlayerNotificationsPlayerNotificationResource, Response: PlayerNotificationsPlayerNotificationResource }
	},
	"/plugin-manager/v1/external-plugins/availability": {
		get: { Parameters: [], Body: never, Response: ExternalPluginsResource }
	},
	"/plugin-manager/v1/status": {
		get: { Parameters: [], Body: never, Response: PluginManagerResource }
	},
	"/plugin-manager/v2/descriptions": {
		get: { Parameters: [], Body: never, Response: PluginDescriptionResource[] }
	},
	"/plugin-manager/v2/descriptions/{plugin}": {
		get: { Parameters: [plugin: string], Body: never, Response: PluginDescriptionResource }
	},
	"/plugin-manager/v2/plugins": {
		get: { Parameters: [], Body: never, Response: PluginResource[] }
	},
	"/plugin-manager/v2/plugins/{plugin}": {
		get: { Parameters: [plugin: string], Body: never, Response: PluginResource }
	},
	"/plugin-manager/v3/plugins-manifest": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/process-control/v1/process": {
		get: { Parameters: [], Body: never, Response: ProcessControlProcess }
	},
	"/riot-messaging-service/v1/message/{a}": {
		get: { Parameters: [a: string], Body: never, Response: RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}": {
		get: { Parameters: [a: string, b: string], Body: never, Response: RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}": {
		get: { Parameters: [a: string, b: string, c: string], Body: never, Response: RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}": {
		get: { Parameters: [a: string, b: string, c: string, d: string], Body: never, Response: RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}": {
		get: { Parameters: [a: string, b: string, c: string, d: string, e: string], Body: never, Response: RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}/{f}": {
		get: { Parameters: [a: string, b: string, c: string, d: string, e: string, f: string], Body: never, Response: RmsMessage }
	},
	"/riot-messaging-service/v1/state": {
		get: { Parameters: [], Body: never, Response: RiotMessagingServiceState }
	},
	"/riotclient/app-name": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/riotclient/app-port": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/riotclient/auth-token": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/riotclient/command-line-args": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/riotclient/machine-id": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/riotclient/region-locale": {
		get: { Parameters: [], Body: never, Response: LolL10nRegionLocale }
	},
	"/riotclient/system-info/v1/basic-info": {
		get: { Parameters: [], Body: never, Response: basicSystemInfo }
	},
	"/riotclient/trace": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/riotclient/ux-crash-count": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/riotclient/ux-state": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/riotclient/v1/crash-reporting/environment": {
		get: { Parameters: [], Body: never, Response: CrashReportingEnvironment }
		put: { Parameters: [], Body: CrashReportingEnvironment, Response: void }
	},
	"/riotclient/zoom-scale": {
		get: { Parameters: [], Body: never, Response: number }
		post: { Parameters: [], Body: number, Response: void }
	},
	"/sanitizer/v1/status": {
		get: { Parameters: [], Body: never, Response: SanitizerSanitizerStatus }
	},
	"/system/v1/builds": {
		get: { Parameters: [], Body: never, Response: BuildInfo }
	},
	"/telemetry/v1/application-start-time": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/tracing/v1/trace/payloads/enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/Help": {
		post: { Parameters: [params?: { "target"?: string, "format"?: RemotingHelpFormat }], Body: never, Response: unknown }
	},
	"/async/v1/status/{asyncToken}": {
		get: { Parameters: [asyncToken: number], Body: never, Response: unknown }
		delete: { Parameters: [asyncToken: number], Body: never, Response: unknown }
	},
	"/async/v1/result/{asyncToken}": {
		get: { Parameters: [asyncToken: number], Body: never, Response: unknown }
	},
	"/LoggingGetEntries": {
		post: { Parameters: [], Body: never, Response: LogEvent[] }
	},
	"/LoggingMetrics": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/LoggingMetricsMetadata": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/LoggingStart": {
		post: { Parameters: [params?: { "buffered"?: boolean, "severity"?: LogSeverityLevels }], Body: never, Response: void }
	},
	"/LoggingStop": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-champ-select-legacy/v1/session/actions/{id}": {
		patch: { Parameters: [id: number], Body: LolChampSelectLegacyChampSelectAction, Response: unknown }
	},
	"/lol-champ-select/v1/session/actions/{id}": {
		patch: { Parameters: [id: number], Body: LolChampSelectChampSelectAction, Response: unknown }
	},
	"/lol-cosmetics/v1/recent/{type}": {
		patch: { Parameters: [type: string], Body: string[], Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/actions/{id}": {
		patch: { Parameters: [id: number], Body: LolLobbyTeamBuilderChampSelectAction, Response: unknown }
	},
	"/lol-npe-tutorial-path/v1/tutorials/init": {
		patch: { Parameters: [], Body: never, Response: void }
	},
	"/lol-rewards/v1/grants/{grantId}/view": {
		patch: { Parameters: [grantId: string], Body: never, Response: void }
	},
	"/lol-rewards/v1/grants/view": {
		patch: { Parameters: [], Body: string[], Response: void }
	},
	"/telemetry/v3/slis/add-bool-diagnostic": {
		patch: { Parameters: [], Body: SLIBoolDiagnostic, Response: void }
	},
	"/telemetry/v3/slis/add-double-diagnostic": {
		patch: { Parameters: [], Body: SLIDoubleDiagnostic, Response: void }
	},
	"/telemetry/v3/slis/add-int-diagnostic": {
		patch: { Parameters: [], Body: SLIIntDiagnostic, Response: void }
	},
	"/telemetry/v3/slis/add-label": {
		patch: { Parameters: [], Body: SLILabel, Response: void }
	},
	"/telemetry/v3/slis/add-string-diagnostic": {
		patch: { Parameters: [], Body: SLIStringDiagnostic, Response: void }
	},
	"/deep-links/v1/launch-lor-link": {
		post: { Parameters: [], Body: never, Response: string }
	},
	"/lol-account-verification/v1/confirmActivationPin": {
		post: { Parameters: [], Body: LolAccountVerificationConfirmActivationPinRequest, Response: void }
	},
	"/lol-account-verification/v1/confirmDeactivationPin": {
		post: { Parameters: [], Body: LolAccountVerificationConfirmDeactivationPinRequest, Response: void }
	},
	"/lol-account-verification/v1/sendActivationPin": {
		post: { Parameters: [], Body: LolAccountVerificationSendActivationPinRequest, Response: void }
	},
	"/lol-account-verification/v1/sendDeactivationPin": {
		post: { Parameters: [], Body: void, Response: void }
	},
	"/lol-career-stats/v1/champion-stats-percentiles": {
		post: { Parameters: [], Body: LolCareerStatsStatsQueryRequest[], Response: LolCareerStatsStatisticsPercentilesResponse[] }
	},
	"/lol-career-stats/v1/position-stats-percentiles": {
		post: { Parameters: [], Body: LolCareerStatsPositionStatsQueryRequest[], Response: LolCareerStatsStatisticsPercentilesResponse[] }
	},
	"/lol-challenges/v1/ack-challenge-update/{id}": {
		post: { Parameters: [id: number], Body: never, Response: void }
	},
	"/lol-challenges/v1/update-player-preferences": {
		post: { Parameters: [], Body: LolChallengesChallengesPlayerPreferences, Response: void }
	},
	"/lol-champ-select-legacy/v1/battle-training/launch": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/actions/{id}/complete": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/my-selection/reroll": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LolChampSelectLegacyChampSelectTradeContract }
	},
	"/lol-champ-select/v1/battle-training/launch": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/ongoing-swap/{id}/clear": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/ongoing-trade/{id}/clear": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/retrieve-latest-game-dto": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/actions/{id}/complete": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/bench/swap/{championId}": {
		post: { Parameters: [championId: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/my-selection/reroll": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/simple-inventory": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LolChampSelectChampSelectSwapContract }
	},
	"/lol-champ-select/v1/session/trades/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LolChampSelectChampSelectTradeContract }
	},
	"/lol-champ-select/v1/team-boost/purchase": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/toggle-favorite/{championId}/{position}": {
		post: { Parameters: [championId: number, position: string], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/toggle-player-muted": {
		post: { Parameters: [], Body: LolChampSelectMutedPlayerInfo, Response: unknown }
	},
	"/lol-chat/v1/conversations/{id}/closed": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
		put: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/conversations/eog-chat-toggle": {
		post: { Parameters: [], Body: boolean, Response: unknown }
	},
	"/lol-chat/v1/session/rso": {
		post: { Parameters: [], Body: LolChatAuthResourceRsoAccessToken, Response: LolChatSessionResource }
	},
	"/lol-chat/v1/system-mutes": {
		post: { Parameters: [], Body: LolChatPlayerMuteUpdate, Response: unknown }
	},
	"/lol-clash/v1/eog-player-update/acknowledge": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/events": {
		post: { Parameters: [], Body: string[], Response: Record<string, ClashEventData> }
	},
	"/lol-clash/v1/game-end/acknowledge": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/lft/player": {
		post: { Parameters: [], Body: LolClashLftState, Response: unknown }
	},
	"/lol-clash/v1/lft/player/find": {
		post: { Parameters: [], Body: LolClashFindPlayers, Response: PlayerFinderDTO[] }
	},
	"/lol-clash/v1/lft/team": {
		post: { Parameters: [], Body: LolClashTeamOpenState, Response: unknown }
	},
	"/lol-clash/v1/lft/team/{rosterId}/request": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/lft/team/fetch-requests": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/lol-clash/v1/lft/team/find": {
		post: { Parameters: [], Body: LolClashFindTeams, Response: OpenedTeamDTO[] }
	},
	"/lol-clash/v1/notifications/acknowledge": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/refresh": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/accept": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/cancel-withdraw": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-all-details": {
		post: { Parameters: [rosterId: string], Body: LolClashRosterDetails, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-icon": {
		post: { Parameters: [rosterId: string], Body: LolClashChangeIconRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-name": {
		post: { Parameters: [rosterId: string], Body: LolClashChangeNameRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-short-name": {
		post: { Parameters: [rosterId: string], Body: LolClashChangeNameRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/decline": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/disband": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/invite": {
		post: { Parameters: [rosterId: string], Body: number[], Response: LolClashClientFailedInvite[] }
	},
	"/lol-clash/v1/roster/{rosterId}/kick": {
		post: { Parameters: [rosterId: string], Body: LolClashKickRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/leave": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/lockin": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/set-position": {
		post: { Parameters: [rosterId: string], Body: LolClashSetPositionRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/set-ticket": {
		post: { Parameters: [rosterId: string], Body: LolClashSetTicketRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest": {
		post: { Parameters: [rosterId: string], Body: number[], Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/accept": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/decline": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/revoke": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/accept": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/decline": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/offer": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: LolClashOfferTicketRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/revoke": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/transfer-captain": {
		post: { Parameters: [rosterId: string], Body: number, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/unlockin": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/unwithdraw": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/update-logos": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/withdraw": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/simple-state-flags/{id}/acknowledge": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/tournament/{tournamentId}/create-roster": {
		post: { Parameters: [tournamentId: number], Body: LolClashRosterDetails, Response: unknown }
	},
	"/lol-clash/v1/update-logos": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-email-verification/v1/confirm-email": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-end-of-game/v1/state/dismiss-stats": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-esport-stream-notifications/v1/send-stats": {
		post: { Parameters: [params: { "eventType": string, "matchId": string }], Body: never, Response: void }
	},
	"/lol-event-shop/v1/claim-select-all": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-event-shop/v1/claim-select-bonus-iteration": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-event-shop/v1/purchase-item": {
		post: { Parameters: [], Body: LolEventShopItemOrderDTO, Response: LolEventShopPurchaseOrderResponseDTO }
	},
	"/lol-event-shop/v1/purchase-offer": {
		post: { Parameters: [], Body: LolEventShopPurchaseOfferRequest, Response: LolEventShopPurchaseOfferResponseV3 }
	},
	"/lol-game-client-chat/v1/instant-messages": {
		post: { Parameters: [params: { "summonerName": string, "message": string }], Body: never, Response: void }
	},
	"/lol-game-client-chat/v2/instant-messages": {
		post: { Parameters: [], Body: LolGameClientChatMessageToPlayer, Response: void }
	},
	"/lol-game-settings/v1/reload-post-game": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-game-settings/v1/save": {
		post: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/ack-failed-to-launch": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/basic-tutorial/start": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/battle-training/start": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/battle-training/stop": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/early-exit": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/pre-end-game-transition": {
		post: { Parameters: [], Body: boolean, Response: void }
	},
	"/lol-gameflow/v1/reconnect": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/session/champ-select/phase-time-remaining": {
		post: { Parameters: [], Body: number, Response: void }
	},
	"/lol-gameflow/v1/session/dodge": {
		post: { Parameters: [], Body: LolGameflowGameflowGameDodge, Response: void }
	},
	"/lol-gameflow/v1/session/event": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/lol-gameflow/v1/session/game-configuration": {
		post: { Parameters: [], Body: LolGameflowQueue, Response: void }
	},
	"/lol-gameflow/v1/session/request-enter-gameflow": {
		post: { Parameters: [], Body: string, Response: boolean }
	},
	"/lol-gameflow/v1/session/request-lobby": {
		post: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/session/request-tournament-checkin": {
		post: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/session/tournament-ended": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/spectate/launch": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-gameflow/v1/spectate/quit": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/tick": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/watch/launch": {
		post: { Parameters: [], Body: string[], Response: unknown }
	},
	"/lol-gameflow/v2/spectate/launch": {
		post: { Parameters: [], Body: LolGameflowSpectateGameInfoResource, Response: unknown }
	},
	"/lol-highlights/v1/file-browser/{highlightId}": {
		post: { Parameters: [highlightId: number], Body: never, Response: unknown }
	},
	"/lol-honeyfruit/v1/account-claim/linking-redirect": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-honor-v2/v1/honor-player": {
		post: { Parameters: [], Body: LolHonorV2ApiHonorPlayerServerRequest, Response: string }
	},
	"/lol-honor-v2/v1/late-recognition/ack": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-honor-v2/v1/level-change/ack": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-honor-v2/v1/mutual-honor/ack": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-honor-v2/v1/reward-granted/ack": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-inventory/v1/notification/acknowledge": {
		post: { Parameters: [], Body: number, Response: void }
	},
	"/lol-item-sets/v1/item-sets/validate": {
		post: { Parameters: [], Body: LolItemSetsValidateItemSetNameInput, Response: LolItemSetsValidateItemSetNameResponse }
	},
	"/lol-kr-shutdown-law/v1/rating-screen/acknowledge": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-license-agreement/v1/agreements/{id}/accept": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-license-agreement/v1/agreements/{id}/decline": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-loadouts/v4/loadouts": {
		post: { Parameters: [], Body: LolLoadoutsCreateLoadoutDTO, Response: LolLoadoutsScopedLoadout }
	},
	"/lol-lobby-team-builder/champ-select/v1/retrieve-latest-game-dto": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/actions/{id}/complete": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/bench/swap/{championId}": {
		post: { Parameters: [championId: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/my-selection/reroll": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LolLobbyTeamBuilderChampSelectSwapContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LolLobbyTeamBuilderChampSelectTradeContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/simple-inventory": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-lobby-team-builder/champ-select/v1/team-boost/purchase": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/v1/ready-check/accept": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/v1/ready-check/decline": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/custom-games/{id}/join": {
		post: { Parameters: [id: number], Body: LolLobbyLobbyCustomJoinParameters, Response: unknown }
	},
	"/lol-lobby/v1/custom-games/refresh": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/bots": {
		post: { Parameters: [], Body: LolLobbyLobbyBotParams, Response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/cancel-champ-select": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/start-champ-select": {
		post: { Parameters: [], Body: never, Response: LolLobbyLobbyCustomChampSelectStartResponse }
	},
	"/lol-lobby/v1/lobby/custom/switch-teams": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-lobby/v1/lobby/members/localMember/player-slots/{slotsIndex}/{perksString}": {
		post: { Parameters: [slotsIndex: number, perksString: string], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/tournaments/{id}/join": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/eligibility/party": {
		post: { Parameters: [], Body: never, Response: LolLobbyEligibility[] }
	},
	"/lol-lobby/v2/eligibility/self": {
		post: { Parameters: [], Body: never, Response: LolLobbyEligibility[] }
	},
	"/lol-lobby/v2/eog-invitations": {
		post: { Parameters: [], Body: LolLobbyLobbyInvitationDto[], Response: LolLobbyLobbyInvitationDto[] }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/grant-invite": {
		post: { Parameters: [summonerId: number], Body: never, Response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/kick": {
		post: { Parameters: [summonerId: number], Body: never, Response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/promote": {
		post: { Parameters: [summonerId: number], Body: never, Response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/revoke-invite": {
		post: { Parameters: [summonerId: number], Body: never, Response: number }
	},
	"/lol-lobby/v2/lobby/team/{team}": {
		post: { Parameters: [team: string], Body: never, Response: void }
	},
	"/lol-lobby/v2/matchmaking/quick-search": {
		post: { Parameters: [], Body: LolLobbyLobbyChangeGameDto, Response: unknown }
	},
	"/lol-lobby/v2/parties/overrides/EnabledForTeamBuilderQueues": {
		post: { Parameters: [], Body: boolean, Response: void }
	},
	"/lol-lobby/v2/party/{partyId}/join": {
		post: { Parameters: [partyId: string], Body: LolLobbyCustomJoinOptionsDto, Response: unknown }
	},
	"/lol-lobby/v2/play-again": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/play-again-decline": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/received-invitations/{invitationId}/accept": {
		post: { Parameters: [invitationId: string], Body: never, Response: void }
	},
	"/lol-lobby/v2/received-invitations/{invitationId}/decline": {
		post: { Parameters: [invitationId: string], Body: never, Response: void }
	},
	"/lol-login/v1/change-summoner-name": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-login/v1/delete-rso-on-close": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-login/v1/leagueSessionStatus": {
		post: { Parameters: [], Body: LolLoginLeagueSessionStatus, Response: void }
	},
	"/lol-login/v1/service-proxy-uuid-requests": {
		post: { Parameters: [params: { "serviceName": string, "methodName": string, "pluginId": number, "timeoutMillis": number, "payload": string }], Body: never, Response: string }
	},
	"/lol-login/v1/session/invoke": {
		post: { Parameters: [params: { "destination": string, "method": string, "args": unknown[] }], Body: never, Response: LolLoginLcdsResponse }
	},
	"/lol-login/v1/summoner-session": {
		post: { Parameters: [], Body: LolLoginSummonerSessionResource, Response: unknown }
	},
	"/lol-login/v1/summoner-session-failed": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/lol-loot/v1/craft/mass": {
		post: { Parameters: [], Body: CraftLootDTO[], Response: LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/claim": {
		post: { Parameters: [lootMilestonesId: string], Body: never, Response: void }
	},
	"/lol-loot/v1/player-loot/{lootName}/redeem": {
		post: { Parameters: [lootName: string], Body: never, Response: LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/player-loot-notifications/{id}/acknowledge": {
		post: { Parameters: [id: string], Body: never, Response: string }
	},
	"/lol-loot/v1/recipes/{recipeName}/craft": {
		post: { Parameters: [recipeName: string, params: { "playerLootList": string[], "repeat"?: number }], Body: never, Response: LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/refresh": {
		post: { Parameters: [], Body: boolean, Response: string }
	},
	"/lol-loyalty/v1/updateLoyaltyInventory": {
		post: { Parameters: [], Body: LolLoyaltyLoyaltyRewards, Response: void }
	},
	"/lol-maps/v1/map": {
		post: { Parameters: [], Body: LolMapsMaps, Response: void }
	},
	"/lol-match-history/v1/acs-endpoint-override": {
		post: { Parameters: [], Body: LolMatchHistoryAcsEndPoint, Response: unknown }
	},
	"/lol-matchmaking/v1/ready-check/accept": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-matchmaking/v1/ready-check/decline": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-missions/v1/force": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-npe-rewards/v1/challenges/opt": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/detect-corruption-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/partial-repair-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/start-checking-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/start-patching-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/stop-checking-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/stop-patching-request": {
		post: { Parameters: [], Body: boolean, Response: void }
	},
	"/lol-perks/v1/recommended-pages-position/champion/{championId}/position/{position}": {
		post: { Parameters: [championId: number, position: string], Body: never, Response: unknown }
	},
	"/lol-perks/v1/update-page-order": {
		post: { Parameters: [], Body: LolPerksUpdatePageOrderRequest, Response: unknown }
	},
	"/lol-pft/v2/events": {
		post: { Parameters: [], Body: LolPftPFTEvent, Response: unknown }
	},
	"/lol-player-behavior/v2/reporter-feedback/{key}": {
		post: { Parameters: [key: string], Body: never, Response: void }
	},
	"/lol-player-name-transition/v1/dismiss": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-player-preferences/v1/player-preferences-endpoint-override": {
		post: { Parameters: [], Body: LolPlayerPreferencesPlayerPreferencesEndpoint, Response: unknown }
	},
	"/lol-player-report-sender/v1/champ-select-reports": {
		post: { Parameters: [], Body: LolPlayerReportSenderPlayerReport, Response: unknown }
	},
	"/lol-player-report-sender/v1/end-of-game-reports": {
		post: { Parameters: [], Body: LolPlayerReportSenderPlayerReport, Response: unknown }
	},
	"/lol-player-report-sender/v1/match-history-reports": {
		post: { Parameters: [], Body: LolPlayerReportSenderPlayerReport, Response: unknown }
	},
	"/lol-pre-end-of-game/v1/complete/{sequenceEventName}": {
		post: { Parameters: [sequenceEventName: string], Body: never, Response: void }
	},
	"/lol-pre-end-of-game/v1/registration/{sequenceEventName}/{priority}": {
		post: { Parameters: [sequenceEventName: string, priority: number], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/first-experience/game": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/first-experience/lcu": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/first-experience/reset": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/gameClientUpdatedPTTKey": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/lol-premade-voice/v1/push-to-talk/check-available": {
		post: { Parameters: [], Body: number, Response: boolean }
	},
	"/lol-premade-voice/v1/settings/reset": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-purchase-widget/v1/purchasable-items/{inventoryType}": {
		post: { Parameters: [inventoryType: string], Body: number[], Response: LolPurchaseWidgetItemChoices }
	},
	"/lol-purchase-widget/v2/purchaseItems": {
		post: { Parameters: [], Body: LolPurchaseWidgetPurchaseRequest, Response: unknown }
	},
	"/lol-purchase-widget/v3/purchaseOffer": {
		post: { Parameters: [], Body: LolPurchaseWidgetPurchaseOfferRequestV3, Response: LolPurchaseWidgetPurchaseOfferResponseV3 }
	},
	"/lol-purchase-widget/v3/validateOffer": {
		post: { Parameters: [], Body: LolPurchaseWidgetValidateOfferRequestV3, Response: LolPurchaseWidgetValidateOfferResponseV3 }
	},
	"/lol-ranked/v1/eos-notifications/{id}/acknowledge": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-ranked/v1/notifications/{id}/acknowledge": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-replays/v1/metadata/{gameId}/create/gameVersion/{gameVersion}/gameType/{gameType}/queueId/{queueId}": {
		post: { Parameters: [gameId: number, gameVersion: string, gameType: string, queueId: number], Body: never, Response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/download": {
		post: { Parameters: [gameId: number], Body: LolReplaysReplayContextData, Response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/download/graceful": {
		post: { Parameters: [gameId: number], Body: LolReplaysReplayContextData, Response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/watch": {
		post: { Parameters: [gameId: number], Body: LolReplaysReplayContextData, Response: void }
	},
	"/lol-replays/v1/rofls/scan": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-replays/v2/metadata/{gameId}/create": {
		post: { Parameters: [gameId: number], Body: LolReplaysReplayCreateMetadata, Response: void }
	},
	"/lol-rewards/v1/grants/{grantId}/select": {
		post: { Parameters: [grantId: string], Body: LolRewardsSelectionRequestDTO, Response: LolRewardsRewardGrant }
	},
	"/lol-rewards/v1/select-bulk": {
		post: { Parameters: [], Body: LolRewardsSelectionRequestDTO[], Response: Record<string, LolRewardsSelectGrantStatusResponse> }
	},
	"/lol-rso-auth/v1/authorization/gas": {
		post: { Parameters: [], Body: LolRsoAuthRSOPlayerCredentials, Response: LolRsoAuthAuthorization }
	},
	"/lol-rso-auth/v1/authorization/refresh": {
		post: { Parameters: [], Body: never, Response: LolRsoAuthAuthorization }
	},
	"/lol-rso-auth/v1/device-id": {
		post: { Parameters: [], Body: never, Response: LolRsoAuthDeviceId }
	},
	"/lol-rso-auth/v1/external-session-config": {
		post: { Parameters: [], Body: unknown, Response: unknown }
	},
	"/lol-seasons/v1/allSeasons/product/{product}": {
		post: { Parameters: [product: string], Body: LolSeasonsAllProductSeasonQuery, Response: LolSeasonsAllSeasonsProduct[] }
	},
	"/lol-settings/v1/account/save": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-settings/v2/reload/{ppType}": {
		post: { Parameters: [ppType: string], Body: never, Response: void }
	},
	"/lol-spectator/v1/buddy/spectate": {
		post: { Parameters: [], Body: string[], Response: LolSpectatorSummonerOrTeamAvailabilty }
	},
	"/lol-spectator/v1/spectate/launch": {
		post: { Parameters: [], Body: LolSpectatorSpectateGameInfo, Response: unknown }
	},
	"/lol-spectator/v2/buddy/spectate": {
		post: { Parameters: [], Body: number[], Response: LolSpectatorSummonerIdAvailability }
	},
	"/lol-statstones/v1/featured-champion-statstones/{championItemId}/{statstoneId}": {
		post: { Parameters: [championItemId: number, statstoneId: string], Body: LolStatstonesStatstoneFeaturedRequest, Response: unknown }
	},
	"/lol-store/v1/notifications/acknowledge": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-store/v3/purchase": {
		post: { Parameters: [], Body: LolStoreItemOrderDTO[], Response: LolStorePurchaseOrderResponseDTO }
	},
	"/lol-suggested-players/v1/reported-player": {
		post: { Parameters: [], Body: LolSuggestedPlayersSuggestedPlayersReportedPlayer, Response: void }
	},
	"/lol-suggested-players/v1/victorious-comrade": {
		post: { Parameters: [], Body: LolSuggestedPlayersSuggestedPlayersVictoriousComrade, Response: void }
	},
	"/lol-summoner/v1/current-summoner/name": {
		post: { Parameters: [], Body: string, Response: LolSummonerSummoner }
	},
	"/lol-summoner/v1/save-alias": {
		post: { Parameters: [], Body: LolSummonerAlias, Response: LolSummonerAliasAvailability }
	},
	"/lol-summoner/v1/summoner-aliases-by-ids": {
		post: { Parameters: [], Body: number[], Response: Record<string, LolSummonerAlias> }
	},
	"/lol-summoner/v1/summoner-aliases-by-puuids": {
		post: { Parameters: [], Body: string[], Response: Record<string, LolSummonerAlias> }
	},
	"/lol-summoner/v1/summoners/aliases": {
		post: { Parameters: [], Body: LolSummonerAlias[], Response: LolSummonerSummoner[] }
	},
	"/lol-summoner/v1/validate-alias": {
		post: { Parameters: [], Body: LolSummonerAlias, Response: LolSummonerAliasAvailability }
	},
	"/lol-summoner/v2/summoners/names": {
		post: { Parameters: [], Body: string[], Response: LolSummonerSummoner[] }
	},
	"/lol-summoner/v2/summoners/puuid": {
		post: { Parameters: [], Body: string[], Response: LolSummonerSummoner[] }
	},
	"/lol-tft-pass/v1/pass/{id}": {
		post: { Parameters: [id: string], Body: never, Response: void }
	},
	"/lol-tft-pass/v1/passes": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-tft-troves/v1/purchase": {
		post: { Parameters: [], Body: LolTftTrovesTrovesPurchaseRequest, Response: LolTftTrovesCapOrdersResponseDTO }
	},
	"/lol-tft-troves/v1/roll": {
		post: { Parameters: [], Body: LolTftTrovesTrovesRollRequest, Response: LolTftTrovesCapOrdersResponseDTO }
	},
	"/lol-tft/v1/tft/homeHub/redirect": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-yourshop/v1/offers/{id}/purchase": {
		post: { Parameters: [id: string], Body: never, Response: LolYourshopPurchaseResponse }
	},
	"/lol-yourshop/v1/offers/{id}/reveal": {
		post: { Parameters: [id: string], Body: never, Response: LolYourshopUIOffer[] }
	},
	"/lol-yourshop/v1/permissions": {
		post: { Parameters: [], Body: LolYourshopPlayerPermissions, Response: LolYourshopPlayerPermissions }
	},
	"/memory/v1/notify-fe-processes-ready": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/memory/v1/snapshot": {
		post: { Parameters: [params: { "processIds": number[], "context": string }], Body: never, Response: void }
	},
	"/patcher/v1/products/{product-id}/detect-corruption-request": {
		post: { Parameters: [product_id: string], Body: never, Response: PatcherProductState }
	},
	"/patcher/v1/products/{product-id}/partial-repair-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/signal-start-patching-delayed": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/start-checking-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/start-patching-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/stop-checking-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/stop-patching-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/payments/v1/pmc-start-url": {
		post: { Parameters: [], Body: PaymentsFrontEndRequest, Response: PaymentsFrontEndResult }
	},
	"/payments/v1/updatePaymentTelemetryState": {
		post: { Parameters: [], Body: PaymentsPaymentsTelemetryTransitions, Response: void }
	},
	"/performance/v1/process/{processId}": {
		post: { Parameters: [processId: number], Body: never, Response: void }
	},
	"/performance/v1/report/restart": {
		post: { Parameters: [params?: { "sampleLength"?: number, "sampleCount"?: number }], Body: never, Response: unknown[] }
	},
	"/process-control/v1/process/quit": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/addorupdatemetric": {
		post: { Parameters: [params: { "group": string, "object": string, "name": string, "value": number }], Body: never, Response: void }
	},
	"/riotclient/kill-and-restart-ux": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/kill-ux": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/launch-ux": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/new-args": {
		post: { Parameters: [], Body: string[], Response: void }
	},
	"/riotclient/open-url-in-browser": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/riotclient/show-swagger": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/unload": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-allow-foreground": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-flash": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-minimize": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-show": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/v1/crash-reporting/logs": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/riotclient/v1/elevation-requests": {
		post: { Parameters: [], Body: ElevationRequest, Response: void }
	},
	"/sanitizer/v1/containsSanitized": {
		post: { Parameters: [], Body: SanitizerContainsSanitizedRequest, Response: SanitizerContainsSanitizedResponse }
	},
	"/sanitizer/v1/sanitize": {
		post: { Parameters: [], Body: SanitizerSanitizeRequest, Response: SanitizerSanitizeResponse }
	},
	"/telemetry/v1/common-data/{key}": {
		post: { Parameters: [key: string], Body: string, Response: void }
	},
	"/telemetry/v1/events/{eventType}": {
		post: { Parameters: [eventType: string], Body: Record<string, unknown>, Response: void }
	},
	"/telemetry/v1/events-with-perf-info/{eventType}": {
		post: { Parameters: [eventType: string], Body: Record<string, unknown>, Response: void }
	},
	"/telemetry/v3/events/{eventType}": {
		post: { Parameters: [eventType: string], Body: Record<string, unknown>, Response: void }
	},
	"/telemetry/v3/events-once/{eventType}/{onceTag}": {
		post: { Parameters: [eventType: string, onceTag: string], Body: Record<string, string>, Response: void }
	},
	"/telemetry/v3/slis/counts": {
		post: { Parameters: [], Body: SLICount, Response: void }
	},
	"/telemetry/v3/uptime-tracking/notify-failure": {
		post: { Parameters: [], Body: NotifyFailureRequest, Response: void }
	},
	"/telemetry/v3/uptime-tracking/notify-success": {
		post: { Parameters: [], Body: NotifySuccessRequest, Response: void }
	},
	"/tracing/v1/trace/critical-flow": {
		post: { Parameters: [], Body: TracingCriticalFlowEventV1, Response: void }
	},
	"/tracing/v1/trace/event": {
		post: { Parameters: [], Body: TracingEventV1, Response: void }
	},
	"/tracing/v1/trace/module": {
		post: { Parameters: [], Body: TracingModuleV1, Response: void }
	},
	"/tracing/v1/trace/non-timing-event/{eventName}": {
		post: { Parameters: [eventName: string, params: { "when": number, "value": string, "unit": string }], Body: never, Response: void }
	},
	"/tracing/v1/trace/phase/begin": {
		post: { Parameters: [], Body: TracingPhaseBeginV1, Response: void }
	},
	"/tracing/v1/trace/phase/end": {
		post: { Parameters: [], Body: TracingPhaseEndV1, Response: void }
	},
	"/tracing/v1/trace/step-event": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/tracing/v1/trace/time-series-event/{eventName}/marker/{markerName}": {
		post: { Parameters: [eventName: string, markerName: string], Body: number, Response: void }
	},
	"/client-config/v1/entitlements-token": {
		put: { Parameters: [], Body: ClientConfigEntitlementsUpdate, Response: void }
	},
	"/client-config/v1/refresh-config-status": {
		put: { Parameters: [], Body: never, Response: void }
	},
	"/client-config/v2/namespace-changes": {
		put: { Parameters: [], Body: ClientConfigConfigNamespaceUpdate, Response: void }
	},
	"/lol-chat/v1/friend-groups/order": {
		put: { Parameters: [], Body: LolChatFriendGroupOrder, Response: unknown }
	},
	"/lol-lobby/v1/lobby/members/localMember/position-preferences": {
		put: { Parameters: [], Body: LolLobbyLobbyPositionPreferences, Response: unknown }
	},
	"/lol-lobby/v1/parties/active": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-lobby/v1/parties/{partyId}/members/{puuid}/role": {
		put: { Parameters: [partyId: string, puuid: string], Body: string, Response: void }
	},
	"/lol-lobby/v1/parties/metadata": {
		put: { Parameters: [], Body: LolLobbyPartyMemberMetadataDto, Response: void }
	},
	"/lol-lobby/v1/parties/queue": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-lobby/v1/parties/ready": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-lobby/v2/lobby/members/localMember/position-preferences": {
		put: { Parameters: [], Body: LolLobbyLobbyPositionPreferences, Response: unknown }
	},
	"/lol-lobby/v2/lobby/partyType": {
		put: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-lobby/v2/lobby/subteamData": {
		put: { Parameters: [], Body: LolLobbySubteamDataDto, Response: void }
	},
	"/lol-loot/v1/loot-odds/evaluateQuery": {
		put: { Parameters: [], Body: QueryEvaluationRequestDTO, Response: LolLootQueryEvaluatedLootItem[] }
	},
	"/lol-missions/v1/player": {
		put: { Parameters: [], Body: IdsDTO, Response: void }
	},
	"/lol-missions/v1/player/{missionId}": {
		put: { Parameters: [missionId: string], Body: LolMissionsRewardGroupsSelection, Response: void }
	},
	"/lol-missions/v2/player/opt": {
		put: { Parameters: [], Body: LolMissionsSeriesOpt, Response: void }
	},
	"/lol-npe-tutorial-path/v1/tutorials/{tutorialId}/view": {
		put: { Parameters: [tutorialId: string], Body: never, Response: void }
	},
	"/lol-patch/v1/game-patch-url": {
		put: { Parameters: [], Body: string, Response: void }
	},
	"/lol-patch/v1/ux": {
		put: { Parameters: [], Body: LolPatchUxResource, Response: void }
	},
	"/lol-perks/v1/pages/validate": {
		put: { Parameters: [], Body: LolPerksValidatePageNameData, Response: LolPerksValidateItemSetNameResponse }
	},
	"/lol-perks/v1/perks/ack-gameplay-updated": {
		put: { Parameters: [], Body: number[], Response: unknown }
	},
	"/lol-player-behavior/v3/reform-card/{id}": {
		put: { Parameters: [id: string], Body: never, Response: void }
	},
	"/lol-player-preferences/v1/preference": {
		put: { Parameters: [], Body: LolPlayerPreferencesPlayerPreferences, Response: unknown }
	},
	"/lol-premade-voice/v1/participants/{puuid}/mute": {
		put: { Parameters: [puuid: string], Body: number, Response: void }
	},
	"/lol-premade-voice/v1/participants/{puuid}/volume": {
		put: { Parameters: [puuid: string], Body: number, Response: void }
	},
	"/lol-premade-voice/v1/self/activationSensitivity": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-premade-voice/v1/self/inputMode": {
		put: { Parameters: [], Body: LolPremadeVoiceInputMode, Response: void }
	},
	"/lol-premade-voice/v1/self/micLevel": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-premade-voice/v1/self/mute": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-summoner/v1/current-summoner/icon": {
		put: { Parameters: [], Body: LolSummonerSummonerIcon, Response: LolSummonerSummoner }
	},
	"/lol-tft-team-planner/v1/team": {
		put: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-tft/v1/tft_experiment_bucket": {
		put: { Parameters: [], Body: number, Response: unknown }
	},
	"/patcher/v1/ux": {
		put: { Parameters: [], Body: PatcherUxResource, Response: void }
	},
	"/riotclient/ux-load-complete": {
		put: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-state/ack": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/Subscribe": {
		post: { Parameters: [params: { "eventName": string, "format"?: RemotingSerializedFormat }], Body: never, Response: unknown }
	},
	"/Unsubscribe": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/WebSocketFormat": {
		post: { Parameters: [], Body: RemotingSerializedFormat, Response: unknown }
	},
}

// @ts-expect-error
export type LCUEndpoint<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>> = LCUEndpointBodyType<Method, Path> extends never ? (...args: [...LCUEndpoints[Path][Method]["Parameters"]]) => Promise<LCUEndpointResponseType<Method, Path>> : (...args: [...LCUEndpoints[Path][Method]["Parameters"], body: LCUEndpointBodyType<Method, Path>]) => Promise<LCUEndpointResponseType<Method, Path>>
// @ts-expect-error
export type LCUEndpointResponseType<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>> = LCUEndpoints[Path][Method]["Response"]
// @ts-expect-error
export type LCUEndpointBodyType<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>> = LCUEndpoints[Path][Method]["Body"]

export type EndpointsWithMethod<Method extends HttpMethod> = { [K in keyof LCUEndpoints]: LCUEndpoints[K] extends { [key in Method]: { } } ? K : never }[keyof LCUEndpoints]

export type HttpMethod = "delete" | "get" | "head" | "patch" | "post" | "put";