import React from "react";
import NewsPage from "../../components/NewsPage";

const NewsWindows11 = () => {
    return(
        <NewsPage
        name="Windows 11"
        content="A Microsoft continua a testar o Windows 11 antes de liberar a versão final do sistema operacional e, naturalmente, novas versões de teste vão sendo liberadas ao longo do caminho até tudo estar 'redondinho' para o público geral."
        content2="Esta semana temos uma nova versão Preview (Windows 11 build 22000.132) do sistema que já está disponível no canal Dev e no Beta para os participantes do Windows Insider Program."
        img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgRFRUYGBgYGRgYGRgSGBgZGRIZGRgZGRocGBgcIS4lHB4rHxgYJzgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJCs9NDU/NTQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwYFBwj/xABLEAACAQIDBAUIBQgIBQUAAAABAgADEQQSIQUxQVEGImFxgQcTMkKRobHBUnKS0fAUFSNTYrLS4RZEVHSCk6LxFyQzwvIlNWNz4v/EABoBAAIDAQEAAAAAAAAAAAAAAAACAQMEBQb/xAArEQACAgEEAQMDAwUAAAAAAAAAAQIRAwQSITFBImGREzJRBRShUnGBsfH/2gAMAwEAAhEDEQA/ANaI4iEkBNhkHAkgIwEkBIAcSQEQEmBIChARwIgIFjNpKnVXrNx+iveflHjCU3URZzjBXJhrMFFyQBzOkAxG10X0Bm7ToPvM4mMxxPWdr+4DuG4d85T4jMC59HgBpn8d9pvxaJdyOfk1cpcQ4R1sXtlmuMxPMJoB32+ZnFxG1SOKr/qPu0981r9CldQDXddBoiqAL8hKh5PKP61j9ZVPzt7pbj1Olh/wn9pllzL/AGZ3Z9aow84zHL6otbN27/R+M6Ive51bt3L39s0adE1G6qwtoAFUBR2ctJP+iq/rWtyyi3jzlctZib4/0I9Hl/BmUp3N95+kd3gOJl6oB2n8eyaI9GltpVYf4VkH6MC1hWcf4V174n7uD8kfs834/kz1Wsq7yO7gPvnOxO0uU0tXoWrb8Q/2Vg7dAEP9Yf7Ky+Gq06+5v4BaHL5RkKuPJ4wdsYZsz5PE/tD/AGUjf8Oqf9of7CTSv1DSry/gZaGf4MWMWZNMXNj/AMOqf9of7CRDydp/aH+ykZ/qOl/L+Cf2MzM0MTeVbZoXTz67xYN2g6A94OniOU1y9AEH9Yf7KwsdC0yMhrOQylT1V0uN8pevwJpxb+CY6PKn0eb4TE6iLpTa9Kp9JWB7crafvTcJ5OKY/rFT7KSe0PJ4lVUVsQ4yZrWVNcxB19knJ+o4G04v+C2GknGV+DzHD1Z3dnPciadPJhSH9YqfZScvG7HGFxIoBiwyK4ZhY6kixt9WW49bjy+mL5K9Rp5RW5nD2k1sQ/ev7qyON9BG5Ej2i/ygmIr56zsNxY27r2HuAhWMP6IfXHwaXxfpQm2mjS9BsTrVo8OrUX/Fo3vAmsImC6FVP+bt9Kk49jKfnN+ROFrVWZ0b8T9JWY0kRIzKWDGRIkoxgBExpIiK0kUuAkgIhHAijCAkwIwEmBIBIcCJ3CjMxAA3kyrE4lUXOxsPeTyEz+Mxb1OuQcvqqNw7Tzl+HBLI76RRn1EcarthWO2mX6q3Vee5n+4Tms2l+A5fjUwKrWbkfZJfnQBQr02WwtmF7Ht1E60MOxJRRyZTlklcmc7adVm03Dl98uxg/R5l9EjqkbrcvDlJ16K1BdGB7Ofcf9pxGxb0syj0TfMrbie7ge2a63R9Pa8DQTfB7pTHVHcPhI4isEQuQxAtogzHUgaAd8so+iO4fCOTbUzyr7PQXwBDa9LQZmubADI+t7AbxbiIfK6OIR9UYNbflN7SwxQTT5QxilVfEogBd1QEgAuwW5O4C/GWySUNFaPBaePpM2RaiMx9VXUk8dwMAtBNoiI8rrVVRS7sFUWuTu1Nh7yBAklGManUV1DqQyncRqDwjwAQjO4VSzGwFuBO/TcJU2JQHKXQHkWAPsvLwbcfZBpgmmVDEoWyZhmuBazbz4dsudbceNvdf5xi9tST3kmVpWDbmDW5Ne19RI5G4JTzrp9X83XepxFBFX6zM4Hxv4T0WeQeVrFH8sSlwFJXPaSzgeyx9s1aN1k/wUZ43GjKYPfOjtF7Ii8yT7Bb5wDZyXYCT2hXzVSBuXqjw3++876l6TC42zQ9CDfGgcqTn2sonopmA8nVLNiK1T6CKg/xNf8A7DPQCJxNXLdlZpgqiRIkCJMyJEzDkIxkjImSAxjR40ACBJARhJgSCUOBGq1FQZmIA7eMmJl9rMxqNm4GwHADhaXYMX1ZU2UZ83048Io2lWeo+YsOwA6KIFUxdVQFzkAbgTYWlxSVunD3HdO3CMYpKlSORK5O2wQ488WB8CZFMYzGysCToAQRf4xsRglPCx/Z+6T2NhgrMx1Iso7OJ+Uue1RtAkggbILFXzeaf1gliG8NwPtENxGy6TDM65mAsSSRmtxIW0tR5eSSpsJjnKX5JU5WegUxoO4QHbWFath3pIwVmFgb8QQbG24G1vGHpuHcIKdnUtf0a6m503nfeef5Ts79KUafk5PRjB1KYPnkRGCqlkqBw5A1a1urewNiTvM0Bgp2bRtbza2/AluHoKihEWyjgO3ee+HbbJhBQW1HD21s2pUrB1Sg65QtsQA1jdiSoKm28TqbMpFKKIwUEDcnojUkW7LSzE4VHtmQNbdfh3ewS1VAFhuGgjuVpIiOJRk5Jvkdm0++ZnZuxHSsj5KQClrspuxuGGmnbNHUQMLEXH3QX810P1aez8coKTiml5JljjNpvwG3mY6bbNxGISiMPc5HLPlqBDa2ljcX1mkdAwKkAgixB3EHhBvzdR/VrFassRx+hGArUKVVK29qzugLhyEIW1yCdbhuO+80sE/NtLT9GugsBbQC5Nrd5MJRAoCgWAAAA4AaCQlSoDFY/Y2NfGPWpvSNF2UZS5DZQFuCAu+4va/ATbwVtnUibmmtz2b774SqgAAbhoOwCO5OSSfgSMFG68g+OpF6bIGylgQDe1zbd3Hj2XnL6P7MeiXLvcHcA4YG5JN7KPR9Edl+ydfEYdHGV1DAG9m3XlNPZ9JWDqgDLexHC8Wxq5C54x5Wf/cl/u9P9+pPZjPHfKjTLbTRRxoJ4depqeyaNLzkQuT7TN4ep5umanE9VPrHj4b4BRa2vLXvixmIDMFX0E6q9vNvE/KKlSZ2WmguzFQBzZjZR7TOvOfwZVE9P8nGEKYM1DvqOzf4V6g94c+M1RlWz8ItGilFdyIqd9hYnxNz4y8zjTluk2XJFREYyZEgYpBEyBlhkSIAVmKOY0kAoCSEYSQkDDiczbOGuM9r2323jt7ROk7hQWYgAaknhMxtbbDPdEuqcTxf7h2TTpYTc7j0ZtTKG2n2UmlfcR43EiMM3Z7R98nQcEXhSWnUbaOO5NMBODY8B7RJ4XZzKTdhY62W5+M6SWjl4jySfAbmV08Io4e3X+UnXYBTIPVgOKrrlN29n3xNrl2C7PSk3DuEH2gX80/mvTyNk3Hr2OXQ6b7S6mdB3D4SNZSVIDZTzABtryM4jR6WHFM4fR2u5esmepURMmV6oN2Y5vOC5A3NwGg0nevBsNRdfSqs4sfSVQb333H41hESEdqotnJSdpUZXphtavh3Rkp1XpsAtsMrsy1C3pMV9RVHoeuWtpa80OzGqGjTNbL53IufJ6OewzWHAX4SVek7EFKhTmAqkH2y5AQACbnibWv22EauRBMNNP8AacHYmLxDMi1UBUo5epcqUqK+XIEy2C21ved2ohKkA5TwNr28IL+S1P17fYTf93ZJvihdvqsKnF6V1q6UL4f0swzEbwvfw7525TiKTsRkfJa9+qGvfv8AxrIkrVEZIuUWk6Ob0VrV2w4bEenmNjrcrw37+Os7Qg+GpOt87l72tcAEc93hCIRVKiIRcUk3Z4H0t2ziUxmLVcViEy1nCKlaqqhcw0VQ1gJ7zTPVHcPhBHwtQm4rsBe4GRO3Qm1yPuhYkRVWXSkpJcVX8kMQzBGKAM4ByhjYM1tATwF4Ns2pVYF6qhL2sg1K233PbCqyEqQGKk7mFtPAyulTcElnLA8CoFjprcfCNfFULXNlrtYE2JtrYC5PcJ475W6+XGhV9JqCBjyXPU0Hf8p7ERfQzxrysJfaSk7hh0v9upL9Le/gXJVcmKprlF/YOZm08m2yDUrnFMLrS9H9qow/7VJPisyOFw71aiU0W7uQiL3nj8z38p7lsTZaYbDpQX1Rdm+m51Zj3n3WmvUZKW1FKXkNMjB6206CGzVqankzoD7LypNrYdtFr0j3On3zFtl+CbQUZAiTVgRcEEcxqIxkAQIkTJGMYEECJGTMjaABUTOFBYmwGpJ4RCcrbrtlCjdvPaeAlmKG+SiLlnshZy9q7Raqco0Qbhz7TOZVNhCMh4D2QfEYZ20At9YgfGdqMYwjUTlbtz3SYNs7GWqFD62o7xv93wndR5wqexusHapaxvZBr7T907KuBuHt1MjtFOVxu4sLD/gyirigN3v+6DVK0Br1o0MV9laLcTjDznKxeJJBka9WAYmpoZtWJRiWQjbPeqR6o7h8JXiqxRbhcxuqgXtcswXee+SpeiO4fCQxSZkIyB93VYgBrEHefb4TyEvY9Jjri+gPB7Wz1vMFcpys1wytbI6qwIG43b3Tpzm4DBojlxhkpsQQXXIS1yCRddeHunRixuuS3I4t+lUgPHYzIVUAXNz1uQtC6b3UNa1wDblcQTEh8+YUg+UdQ5wNSBe4O737jCqLMRdlynlcH3iNaora5sk7WUnkCfYJxsPtCt+iZxSC1WUDJmJYMua410tu1nZqC6nS+h0JtfTdfhONh9mqtRG8wRlIsxrFsnaFJ3dkmLVclOSM200ztWnN21tJqKpkQMztlGdgqLYEksx3CwnSnN2hRNQFHw+dAbg51FyNxtoRCLSavovTp3Vk9kbQNZGLKFZGyMFOYXsDoR3w8mc7Z6ZLUloZEGpIdSLn3sYbWYhSVAJHBjlHbc8NIravjomTUnaVHm+3fKFiKFevTWhRZKTsnWZ87BbXJ17eXGelIbgHmAZkcZ0Vwtao1Z8GrO5zOfyggMSdTYNa3hrNThqhZblMnADMGuOYI/GkG14ESa7HxVQpTZxqVUkA8SBAdlY9qjOrBQUy6LvGYE9YZjbQA+MJxpYjIEzhgQbOFtfQ7+yB4LDebd2SgVzlc7GoDfKMoJBJ3D5SCWubOrPGvKzrtBb7hQQ95z1J7LPGPK49toL/APRT/fqS7Tup2LP7TL7N2rUw7mpSKq5UqGZQxQHfkB0B4XIOnjI4zalasb1arvf6bEjwXcPATnZpNEJ/G6blTldFD6CUq2hNOoTwMEp2BsNT+PZCA4G/U+6aYsqkkdDDYl0OZHZDzRip9002y+mNVCFrAVF+kLBx8m93fMauIliV47xwmqaKblF8HsOBx9OsnnKbhhx5qeTLvBhBnkmz9oPScVEYq3ZuI5MNxE3uwekaV7U3slTgB6NT6t9x/Z+M5+fSSh6o8ovhlT4fZ3DIyZkZkLQkQXaWE84nV0caqRpfsPYYUJIRoycZKSCcFOO1mH8424k+JkgYV0gwuSpnHovqO/iPn4znK872JqcFJHn8sHCbTCM0g7yBaEUsEzanqjt3+z74zajyxEBVKkFNJ39BWb6oNvbunafzFLfZm7esfZuEFr7c4KoH1tfdGjOb+2PyWI5p2NXb1QPrMvyMExOwa4U2VT3MvztC6+3X4vbuAgVbpIwB6xPgvzjSnlS5aNGKM/CPb6Y6o7h8JK0jSPVHcPhI4nPkPm8ufS2e+XeL3truvPLPs7qLI0Dz4j6FLt67+7qyLvieCUr3Fru+u6/q6cZAx0BFKcMXy9cKGudEJIA4anjLoAPGiigAorxjFCwoUZgCCDqDoRzBiikACnZ1H9Wm+/ojfzl9KmqjKoAA3Abhc3k4pAwooooAKeI+WE/+pL/d0/fqT22eK+VwKNoqx1/5dLKOJz1N/IS3D9wsujDommZjYe9u6EU0Zv2VEejhyxzN7OAEpxeKv1F9Ef6v5ToL0q2UdukTasB1V0HPi3fIipBgDyMkGkxmQ4haPL0eAq0vRpfGZTKIerQmk5HG1tbjSx5g8DAKRhSGaIu0Z3wz0voxtnz9Mo5/SINf213B+/ge3vncnlGzMa1GolZfUOoHrKfSXxHynqi1AQCuoIBB5gi85WqwvHO15NWKW5chgkhIiSWZC4F2nghWplOO9TyYfKYylhHLlMtspsc24EfGbHF7RC3Ckab2O5fvMyW0drliQpPax3nunU0UcqTS6OVrJ45P09hDVKdHecz+/wDlOXjNqu+l8q8l+ZgLtx+MGqPOrDBFcy5ZjSvolVxE5+IxJirPAqjSyTpcGrFjRCrUJglVtDLmMpddDMmR2boKj6Zo+ivcPhJyul6K9w+EsE8zK+aN6SIq1xf/AHgv5wXdkqfYbTx3HwvGwmzKdN3dMwZ9XuxN/by4cpcMKLWzvb65kJNJW7Bf2LKNQOMwBGpHWUqdOw6yyUHCg+u+4bmIlyJYWuT2nU+MZAxzEIooMEMYLjcWEsLZmYkKtwuYgFjq2g0BhRgW0cAtZQCzKyklXp2DISCpKkgjUEjdIVXyRPdt9PZNMYpVmsTlIDKvWIJseG/fIfnBdOpU1Fx1G5kWPI6ceYj4bAqiFAzEsbs5PXcgAXJAHAASwYUfTf7Zg6vgIbtq3dksNXDgkBhY266lSdAdAdeMtlLYYH1n4eseEYYYXvmf7RkDl8aKPABrTx3yqoo2grsbDzCDX69TdPY55N5S8EH2irEXtQQf66k06WN5KKsslGNs8/fPU6qghf3u+XUtnTt/k6ot2ZVHNiBBam16K6KGc8wMo9p1906jxxTtvkxfUnLiK4KEwPZJNgAd4lT7cc+iir33Y/KC1NtVxrcfZESUoxXQ0YZH5LK+zCNV9h+RgYBBsdCOcIpbfqesqt4W+BhD4inWG7I/Ancey/KJGcZcxHakvuKKRhlOBqhU2IsYXRmzGzPkCkE2vR/birhaaMdVBXwViB7gJi0Eoz7+8/GGbGpVZGNtHt05eNx17qpsg3t9L+UltbFWtTB36t3cBM5tTEWUIOO/umDS6bdTfkq1eoduEf8AIJtHHlzlXRB/q7TOezSbSioZ3scFFUjnJ2Vu0FqtLXaCu0dujRCJRUMFeEvKStyBz0lEma4D4XCFteHxhVbAdU6cJ28BhBYDlOo+ABU6cIsnGK57M09U1Okeo0h1V7h8JOKmvVHcPhHtPLPs76fArRWjxSAGko0cQAYxo5jGBJExRzImKMKKNFAB4oo8AFFHigKK08i8qu0Hp4xVWwvRTW3WJz1NBfdPXp4t5WqebaS/3dP36k06W/qcdiZUnHkwrZnbMxJPaSfjL0w8LoYWdCjgSeE7MMHl9mHJnS4OSKEi9CaEbOlNfA2EaeKkUx1CbMniKWVuwyykYRtNLDxgtOc3aozaR0E90UzqYarcZG8DyhSLacyiZ0aDTXhk7M2WIWGsCeQvDtm7CerSWoPWv7iR8pyqz3sg8be4T1nZWB81Qp0raqov9Y6t7yYajNtojHG0c/ab/pnvzH7onFxmrXmh6Q4YgiqNxsrdh4H5eAmfc62l2kalBNHOzwccjT8gTiDVRD3SC1EnQjIyxdOmc2rBXaG10gNUQk6N2PlFbRsP6a/WHxjEyKtYg8iDKWy9G0wPCd+jhyyGw4TO4A3I5b79kA2vtuo7tSViqKSoVTbNbQliN+spzQlPiJz1hcpv2Pbl3DuERlNOp1R3D4SWeebaPSR6LIpDP2RZ4UMSikC8WeRTAnGMjnjeck0BKMRG85G85Fomx7R5HzkbzkKJsnFIeci852QogsEUh5yLzkKJsnPK/KLhc+PU/wDwoP8AW89RDzC9Mqd8UGOg82mp+s826CvrK/cx6yTWJ0ZGhgwIYtGV1tpUE0zZjyQX9+6czFdIm9RFXtbU+zdO8510cZYck3ydnzEhUwsxmN2zXa96jAcl6o904/nnZtWY35kmYs2rUXtqzdi0Dq3I7XSTDsji4Nm1B4d1+c5VMTuYRiFynUWsQ2oPtgOIw4WoQu42IHK/CZ54mnu/JqhNVt/A1BIZmyjtlSAAXP8AvOhsTZVTFVfNoNNC7n0aa8z28hxllqC5FpyZ2uhGyDVreeYdSmQdfWfeo8N57hznpEH2fgkoU1pILKo472PEntMInPzZHOVotjGkXPTDKVYXBFiDxmM2zs5qTcSh9Fvke0e+b4YN+Q9okK+zS6lHUFTvBI/AMnT6l4pX4/AufAskfc81p1A3VO/4/wA5XVpzvY7obiA582FZd4JYKR2Ht7ZGn0YxdrMi9hDrr3ztR1eHtSRyZ6TJ4XJlq6TmYlJuKnRPEn1F+0sEq9C8WdyL9tZa9Vha+5fI2LHli+Yswt5EzV1OgWOvcIlvrrIf0Bx30E/zFlL1OL+pG1Y5fgjsLEXp9q9U/L3WnLRL13vuBZj2jfbxJE0uyuhuNpswZEysODroRu+cm3QzF+cdsi5WW3prvuPugtRir7l8lX0ZKTpPk9NpnqjuHwk1MwzVNuKcq08KVFgCxOYgDebOBeWJX23xpYXwJ/jnDeK32vk6l0ro2NAPbr2v2brWHIDjeVZq1vRp372t8Jm0rbY408N4f+cvSrtTimH8P/KCwNL7l8lbzc9P4NDQZ9c4UbrFSTfnv3S6Zd32rYZaeHvbUdtx+3u3wetU20G0pYbLpa977tfX53k/S918jKd+H8GwjTK0621vWp4fwP8A+47VdrZWsmHzX6tzoRfj1+UHhf8AUvkj6ns/g1MUxxr7av8A9LDW7zcc/XlvndrlfQwwbmbkeIzxfpe6+Rt/szWWjWmK/KdufqsJ4E/xxjidufqcL9o/xw+l7r5J3extbRphzidv8KOE8WP8cYYjb/6rB+0/xyquasajdXlaZ8xv6OvLnpbjuve8xYrbe/VYP2n+OWLX25xp4XwJ/jlix35XyK3Rtp5N5TATjlFzbzKaX0vnfhNQtXbPGnhvf/HONtbo1tDE1fPVUp5soUZHUAAXIAFzxJmvSRjjybpSVf3KM0nKNJP4MKKcHxAtNv8A0Ixf0F+2sDxvQHHH0UQ99RROjm1WJR4kjNjhNy5TPPMXUuco8ZfgKGt5qKfky2he5Sn/AJizpYfyf41fUT/MWc3FKEp7ptG3JuUdsUcGkoAudAN859auCxY8dw7OF5rsX0E2i3VVKYXmaq3PhOt0a8mTKRUxeV23ikjXTvdvW7hpzvLs2rg+Ivopx4GuZGV6O9Gq2MYPqlIHV2Hpcwg9Y9u4e6eqbM2bTw9MUqS5VG/m5+kx4mdRNnMAFCgACwAsAAOAHCP+QvyHtEwSyuXZco0BmNDDs9+Q9ojfm9+Q9oiWiaZ2ooopUWDGVtFFGQETIxRRkKxGNFFAYaPFFABjEIooASEUUUBWVYtWNNlS2cqQuY2F+08IFsTDVUVxVK3Z1K5XLaZbHfu1iik36RXFb0yeBwrqxdytyX0UsS2Z8y5ifojQW58BK8GcWuIcPkOHZiaZDnzijKoClMlrXDG+bjFFEZaDdIMFXqKRRWmWISzVGtly58w9E78y+yHYilU82oQIzrl/6jMq3AsTcAn3RRSJQUltZC45IYuhVfDsisEqFbAgkqG5Xte3C9pHZWHqJSKvZXN7AOXC6fSIHGKKEeIqKE2pz3eTj9Fdm4ylUZsS4KsgBysGvUzEltFHAnUzUCNFBdFrJCPaKKSKKIxRSWBCOI0UglEohFFIAmkuWKKQBIRRRQIGiiigB//Z"
      />
    )
}

export default NewsWindows11;