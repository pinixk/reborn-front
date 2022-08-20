import { createWebHistory, createRouter } from "vue-router";
import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import Join from "@/views/Join.vue";
import WoCreate from "@/views/WoCreate.vue";
import WoRecord from "@/views/WoRecord.vue";
import WoList from "@/views/WoList.vue";
import WoDetail from "@/views/WoDetail.vue";
import Board from "@/views/Board.vue";
import BoardWrite from "@/views/BoardWrite.vue";

const routes = [
  {path: "/", name: "main", component: Main},
  {path: "/login", name: "login", component: Login},
  {path: "/join", name: "join", component: Join},
  {path: "/workout/create", name: "woCreate", component: WoCreate},
  {path: "/workout/record", name: "woRecord", component: WoRecord},
  {path: "/workout/list", name: "woList", component: WoList},
  {path: "/workout/detail", name: "woDetail", component: WoDetail},
  {path: "/board", name: "board", component: Board},
  {path: "/board/write", name: "boardWrite", component: BoardWrite},
]

const router = createRouter({history: createWebHistory(),routes,})

export default router;