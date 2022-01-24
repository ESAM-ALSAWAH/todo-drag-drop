import { useState } from 'react'
export const useModal = () => {
  const [open, setOpen] = useState<any>(false)
  const handleOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)

  return [open, handleOpen, handleClose]
}
