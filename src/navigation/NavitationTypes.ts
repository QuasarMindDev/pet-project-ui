import { NavigatorScreenParams } from "@react-navigation/native"

export type RootTabParams = {
    HomeStack: NavigatorScreenParams<HomeStackParams>;
    SetupStack: NavigatorScreenParams<SetupStackParams>;
}

export type HomeStackParams = {}

export type SetupStackParams = {}
