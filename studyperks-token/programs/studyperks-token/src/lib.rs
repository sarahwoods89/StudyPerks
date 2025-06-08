use anchor_lang::prelude::*;

declare_id!("ReplaceWithYourProgramIdLater");

#[program]
pub mod studyperks_token {
    use super::*;

    pub fn mint_token(ctx: Context<MintToken>) -> Result<()> {
        msg!("Minting StudyPerks token...");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct MintToken<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
}
