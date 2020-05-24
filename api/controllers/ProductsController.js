/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

const util = require('util')
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamStore = require('steamstore');
const SteamCommunity = require('steamcommunity');

module.exports = {

    post: (req, res) => {
        let data = req.body;
        const community = new SteamCommunity();
        const logOnOptions = {
            accountName: data.accountName,
            password: data.password,
            twoFactorCode: data.twoFactorCode,
            disableMobile: true
        }

        community.login(logOnOptions, (err, sessionID, cookies) => {
            if (err) {
                res.json({err: "Sai code"});
            } else {
                res.json({"cookie": cookies});
            }
        });
    },
    wallet: (req, res) => {
        let data = req.body;
        const st = new SteamStore();
        var cookie = data.cookie;
        var code = data.code;
        st.setCookies(cookie);
        st.getWalletBalance((err, response) => {
            if (err) {
                res.json(err);

            } else {
                res.json({balance: response.formattedBalance});
            }
        });

    }
}