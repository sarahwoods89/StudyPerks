use anchor_lang::prelude::*;

declare_id!("XeBkTf7UnGtg9cBsz3fqqfnpiF5yzvKTySjDhVR4Atk");

#[program]
pub mod studyperks_token {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
