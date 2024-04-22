import React from "react";
import UnityApp from '../components/UnityApp'
function BankingRoles() {

  return (
    <UnityApp
      dataUrl="https://stickball.s3.amazonaws.com/BankingRoles/banking-roles.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/BankingRoles/banking-roles.framework.js"
      loaderUrl="https://stickball.s3.amazonaws.com/BankingRoles/banking-roles.loader.js"
      codeUrl="https://stickball.s3.amazonaws.com/BankingRoles/banking-roles.wasm"
      title="Stickball Banking Roles"
      vidUrl="https://stickball.s3.amazonaws.com/Banking+Roles+Link+Video+(Compressed).mp4"
    />
  );
}

export default BankingRoles;