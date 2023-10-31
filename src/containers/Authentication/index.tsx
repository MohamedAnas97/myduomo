import React, { useEffect } from "react";
import CryptoJS from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import { withRouter } from "react-router-dom";
const phpUnserialize = require("phpunserialize");

const Authentication = (props: any) => {
  const { history } = props;
  console.log(
    "history",
    history?.location.search?.replace("?result=", ""),
    history?.location?.search.includes("?result=")
  );
  // handler to decode the login data
  const decodeAuthHandler = () => {
    if (history?.location?.search.includes("?result=")) {
      let encrypted: any = history?.location.search?.replace("?result=", "");
      // "eyJpdiI6ImZ0QmQvQmVQa3A5b2NJY2VvSWFBK1E9PSIsInZhbHVlIjoiSUhEVmpVU0w5Z0FSWW1MaHY4VEdqOUtKalZwbmVGWEh2TlRmSGtjQ0hxTVg0aGsyUXlsQXFxSlI5T1NqeXQrK3lUOEMyOXVObFhLem13aWpabTZ4RUlEWmo4dXlTamlpVlRvSXBoZ2ZFMXlUTmhYemt3Y1BxNkVMbkRsWjV0ekJ0K2tQYWhRWGthcWloVFdFKzByVk1VTnRSMXdhR3JvTkI1bWVTUVpMdENpVGlObC9LTGsrOW9wRlB4N2g3Z1pXZGh6aS9SN1NFNytIT3pIRDgxZVFVamc2ZkJ5ZXFvZnB4K0ViTXpSQWpmNzBzckpTbmU3TkVCQnJnL3pqd1NBZ0NPNGtrYzNNQjViUmVlYnY2Ny9sR2hILytVQnRnWTk2SmhzQkprUDdCdG55SE4zd2E4WDJIQVdjTkVpS1FXbzN1ODZ4aEdXZzVCQk40bW1YOWNEZTNYM0owYWdyaWRsem03NmdNbDdjcWtUcjFUajI3WDJ1UzZ6VTF2bXVzeDV0TnpLT3BZcTVtdG5BZCt3SDZVYlRJeGViTnhTd1h3M3NwMml4TjkyeDM4aGhwcE9RK0ZCS0x4UHFOWEtSWUI3NDdXWk5EU2dTWTNsWkNGcVpzTnJnaVZxVXV5aURScElVZVMxZ25RNi9OVVlORnB4Zmxqd2VpSUtHVldEN1RNblZTaVg2ZXdGbnh0NktZL3dFWFlkc21BbHlpUTRRb3dhMTRIYkNjT2xZUGdJNlNLWmpHcjJMTFg5cUx5Ukg3TUV3ZVZ5RWI4NjVsSUVZeExKSHl6Q0pjQ2dHTWx5dDV3a1Y5OUcrTDliY3pST1FvSUtCN3pheWtGaEprUmNxSUd3R2dib1ZVbzdvWWlkZEdKSktITytRNmJqSVlOdVlhR3hzS1hEZjBxdXBnUnZ2WVJLRUhycG5uMUtGZ2hxOU1CTWVSSzlvbEdWYUoyZFBuTFlBS1JnNWRXbTZDSnVnelVsVjdHaHhqQXJUby95MG03VFI4UnBRa1ZtRUZXZjBHWGUzSmJjQnZlMUNwKzVMZ2kxNHhHNGYzODAwdkJuditMVnUvMGM2RjVNdlpFU24yZmZTY1o5YWtjQ01uN1UvSVJZbXZPV1Y4ZThqYWY5Y0JZMnV4ZWNJME1uZ00vajlJaXRqNi83M0ZobmdyOThaVDI4WC9VNDR1cU1MN25nbFpDTVlqUGIySTJtUnRjZVAyb2Jock01SlJYL0hUa3MwQkRSQi9hQk5WMWpmR1lkMGZJOEsxR2Z4eUhDTUl5dVU1MzNac0xEdWFsTEVibk9xcGhhWEFhWVBqTStQNWRreVh5TFNrYmpLd3A3MVJUb0RRbVRtUDJPaGwrVW9xRVlReGlGN1o2bzJZUG55Q3dwK0hwb2tJb1ZvUm92aXZkWDBmSDJTZVlidVJhKys3SVVzYzhHVXRkb0NtMjhjejJJaDk2c0Q3SWQ2MHZNWmV4VlJocmw5WGRtL1VuYU12SGV0QTRIbEFDNk5yZVUxVlMxMTdoWEwrTlFvckJkQWdMOFpIZ1ZtdzF5WlArT2VOMmV3Znd2RG9kZ2VzcGVWR0ltRVlSTy9HZXB1S2FMTDFGTmF3NzJPYjRoT3NtaGIzcmhXREZOWFdmbFZsYjlJVU9MY0kza3ZSSjdsR0lnTXRhVWg0UVlOUTErM05SNkt3V1l2NzhiejZVYnIxbjhEZVArejdmWVB1YUNzakFkYjNzTVZhOWRoYm00UTMwbzJFS0ptRVNBcUNOUkdlcXpHdFZqQmxpeG9UNTBmWmNSZVgwV25Fd3J5czFaczVIOXdFaWNlcDEzNFFFWm1TMS9OVnlzd0pLQzFNUWZrZ2NXWmxjODBTSlkvaWovNlo2ZTM3RHdYSmxDUjcrbDZiaEhMc1NOYzNIQmNnUXpzV1I0YlhueUVXWVVqWHRvMFlQRUZrSXA5K1BjenhIZ2RsdVZJWkx1R2o3ZkwiLCJtYWMiOiI5Yzk5ZTMwOTkxZDcwYWU1ZDQ0M2ZlMTI2ODRhMTJiMzQ3NDk4YzZlYzhhNmE3MTA2ZWRmMTg0ZmUzYmE3MjNkIiwidGFnIjoiIn0=";
      //  The APP_KEY
      let key: any = process.env.REACT_APP_ENCRIPTED_KEY;
      //  Laravel creates a JSON to store iv, value and a mac and base64 encodes it.
      // So let's base64 decode the string to get them.
      encrypted = atob(encrypted);
      encrypted = JSON.parse(encrypted);
      //  IV is base64 encoded in Laravel, expected as word array in cryptojs
      const iv = Base64.parse(encrypted.iv);
      // Value (chipher text) is also base64 encoded in Laravel, same in cryptojs
      const value = encrypted.value;
      //  Key is base64 encoded in Laravel, word array expected in cryptojs
      // Key is base64 encoded in Laravel, word array expected in cryptojs
      key = CryptoJS.enc.Base64.parse(key);
      // Decrypt the value, providing the IV.
      let decrypted: any = CryptoJS.AES.decrypt(value, key, {
        iv: iv,
      });
      // CryptoJS returns a word array which can be
      // converted to string like this
      decrypted = decrypted.toString(CryptoJS.enc.Utf8);
      console.log("decrypted", decrypted, phpUnserialize(decrypted)); // Voilà! Prints "Hello world!"}
    }
  };
  //   useEffect to call decoded handler
  useEffect(() => {
    decodeAuthHandler();
  }, []);
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      hello World
    </div>
  );
};

export default withRouter(Authentication);
