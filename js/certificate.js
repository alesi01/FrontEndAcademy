/**
 * Generador de Certificados de Frontend Academy
 * Permite renderizar y exportar en alta resolución (1920x1080) en formato PNG y JPG.
 */

const CertificateEngine = {
  // Genera el certificado en un elemento Canvas
  drawCertificate: function (canvas, data) {
    const ctx = canvas.getContext('2d');
    const width = 1920;
    const height = 1080;

    canvas.width = width;
    canvas.height = height;

    const {
      studentName = 'Frontend Developer',
      technology = 'JavaScript',
      score = 90,
      credentialId = 'FA-' + Math.floor(100000 + Math.random() * 900000),
      issueDate = new Date().toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      themeColor = '#3525cd'
    } = data;

    // 1. Fondo elegante con textura y gradiente suave
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, '#0c0e18');
    bgGradient.addColorStop(0.5, '#121626');
    bgGradient.addColorStop(1, '#090b12');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Patrón de seguridad / Guilloche geométrico de fondo
    ctx.save();
    ctx.strokeStyle = 'rgba(79, 70, 229, 0.05)';
    ctx.lineWidth = 1;
    for (let i = -width; i < width * 2; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
    }
    for (let i = 0; i < width * 2; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i - height, height);
      ctx.stroke();
    }
    ctx.restore();

    // 3. Marco exterior de lujo con bordes dorados e índigo
    const margin = 50;
    ctx.save();
    // Borde exterior doble
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);

    // Borde interior con gradiente
    const borderGrad = ctx.createLinearGradient(margin, margin, width - margin, height - margin);
    borderGrad.addColorStop(0, '#4f46e5');
    borderGrad.addColorStop(0.3, '#818cf8');
    borderGrad.addColorStop(0.7, '#f59e0b');
    borderGrad.addColorStop(1, '#4f46e5');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 5;
    ctx.strokeRect(margin + 12, margin + 12, width - (margin + 12) * 2, height - (margin + 12) * 2);

    // Esquinas decorativas
    const cornerSize = 40;
    const drawCorner = (x, y, dx, dy) => {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x, y + dy * cornerSize);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * cornerSize, y);
      ctx.stroke();
    };

    drawCorner(margin + 20, margin + 20, 1, 1);
    drawCorner(width - margin - 20, margin + 20, -1, 1);
    drawCorner(margin + 20, height - margin - 20, 1, -1);
    drawCorner(width - margin - 20, height - margin - 20, -1, -1);
    ctx.restore();

    // 4. Logo de Frontend Academy dibujado en Canvas
    ctx.save();
    const logoX = width / 2;
    const logoY = 160;

    // Ícono del logo (Libro / Código estilizado)
    ctx.save();
    ctx.translate(logoX, logoY - 40);
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Glow effect
    ctx.shadowColor = '#4f46e5';
    ctx.shadowBlur = 15;

    // Páginas del libro
    ctx.beginPath();
    // Centro
    ctx.moveTo(0, -25);
    ctx.lineTo(0, 25);
    // Página izquierda
    ctx.moveTo(0, 25);
    ctx.bezierCurveTo(-25, 20, -45, 10, -50, 15);
    ctx.lineTo(-50, -30);
    ctx.bezierCurveTo(-45, -35, -25, -25, 0, -20);
    // Página derecha
    ctx.moveTo(0, 25);
    ctx.bezierCurveTo(25, 20, 45, 10, 50, 15);
    ctx.lineTo(50, -30);
    ctx.bezierCurveTo(45, -35, 25, -25, 0, -20);
    ctx.stroke();

    // Líneas interiores de código
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-35, -15); ctx.lineTo(-15, -10);
    ctx.moveTo(-38, 0); ctx.lineTo(-15, 5);
    ctx.moveTo(15, -10); ctx.lineTo(35, -15);
    ctx.moveTo(15, 5); ctx.lineTo(38, 0);
    ctx.stroke();
    ctx.restore();

    // Texto del Logo
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 28px "Hanken Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '4px';
    ctx.fillText('FRONTEND ACADEMY', logoX, logoY + 15);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillText('INSTITUTE OF ADVANCED WEB ENGINEERING', logoX, logoY + 38);
    ctx.restore();

    // 5. Título del Certificado
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#f59e0b';
    ctx.font = '600 16px "JetBrains Mono", monospace';
    ctx.letterSpacing = '6px';
    ctx.fillText('CERTIFICADO OFICIAL DE ACREDITACIÓN PROFESIONAL', width / 2, 290);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 52px "Hanken Grotesk", sans-serif';
    ctx.fillText('Certificado de Excelencia Técnica', width / 2, 360);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '400 20px "Hanken Grotesk", sans-serif';
    ctx.fillText('Por cuanto se certifica que el/la desarrollador/a:', width / 2, 420);
    ctx.restore();

    // 6. Nombre del Estudiante (Destacado en dorado brillante)
    ctx.save();
    ctx.textAlign = 'center';
    const nameGradient = ctx.createLinearGradient(width / 2 - 300, 0, width / 2 + 300, 0);
    nameGradient.addColorStop(0, '#ffffff');
    nameGradient.addColorStop(0.5, '#c7d2fe');
    nameGradient.addColorStop(1, '#ffffff');
    ctx.fillStyle = nameGradient;
    ctx.font = '700 54px "Hanken Grotesk", sans-serif';
    ctx.fillText(studentName, width / 2, 500);

    // Línea divisoria decorativa bajo el nombre
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 320, 525);
    ctx.lineTo(width / 2 + 320, 525);
    ctx.stroke();

    // Diamante central
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(width / 2, 525, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 7. Texto del logro
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '400 22px "Hanken Grotesk", sans-serif';
    ctx.fillText(
      `Ha superado con éxito la evaluación integral de conocimientos teóricos y prácticos en`,
      width / 2,
      585
    );

    // Nombre de la Tecnología en cápsula
    ctx.font = '700 34px "Hanken Grotesk", sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText(`${technology.toUpperCase()}`, width / 2, 635);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 20px "Hanken Grotesk", sans-serif';
    ctx.fillText(
      `Demostrando dominio avanzado de estándares modernos con una calificación final de ${score}%`,
      width / 2,
      685
    );
    ctx.restore();

    // 8. Sello de Cera / Medalla Dorada
    ctx.save();
    const sealX = width / 2;
    const sealY = 820;

    // Resplandor del sello
    ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
    ctx.shadowBlur = 25;

    // Círculo exterior dorado
    const sealGrad = ctx.createRadialGradient(sealX, sealY, 10, sealX, sealY, 65);
    sealGrad.addColorStop(0, '#fef08a');
    sealGrad.addColorStop(0.5, '#eab308');
    sealGrad.addColorStop(1, '#a16207');
    ctx.fillStyle = sealGrad;
    ctx.beginPath();
    ctx.arc(sealX, sealY, 60, 0, Math.PI * 2);
    ctx.fill();

    // Borde acanalado
    ctx.strokeStyle = '#fef9c3';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Texto interior del sello
    ctx.fillStyle = '#422006';
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('HABILIDAD VERIFICADA', sealX, sealY - 12);
    ctx.font = '800 20px "Hanken Grotesk", sans-serif';
    ctx.fillText(`${score}%`, sealX, sealY + 12);
    ctx.font = '700 10px "JetBrains Mono", monospace';
    ctx.fillText('ESPECIALISTA FRONTEND', sealX, sealY + 28);
    ctx.restore();

    // 9. Firmas y Validaciones
    // Firma 1: Director Académico
    ctx.save();
    const sig1X = width / 2 - 420;
    const sigY = 870;

    // Trazado simulado de firma
    ctx.strokeStyle = '#c7d2fe';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sig1X - 80, sigY - 30);
    ctx.bezierCurveTo(sig1X - 40, sigY - 60, sig1X, sigY - 10, sig1X + 40, sigY - 40);
    ctx.bezierCurveTo(sig1X + 60, sigY - 50, sig1X + 80, sigY - 20, sig1X + 110, sigY - 35);
    ctx.stroke();

    // Línea de firma
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.moveTo(sig1X - 120, sigY);
    ctx.lineTo(sig1X + 120, sigY);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 16px "Hanken Grotesk", sans-serif';
    ctx.fillText('Prof. Martín Echeverría', sig1X, sigY + 25);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '400 13px "Hanken Grotesk", sans-serif';
    ctx.fillText('Director Académico | Frontend Academy', sig1X, sigY + 45);
    ctx.restore();

    // Firma 2: Lead Architect & Fecha
    ctx.save();
    const sig2X = width / 2 + 420;

    // Trazado simulado de firma 2
    ctx.strokeStyle = '#c7d2fe';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sig2X - 90, sigY - 25);
    ctx.bezierCurveTo(sig2X - 50, sigY - 55, sig2X - 10, sigY - 15, sig2X + 30, sigY - 45);
    ctx.bezierCurveTo(sig2X + 70, sigY - 60, sig2X + 60, sigY - 10, sig2X + 100, sigY - 30);
    ctx.stroke();

    // Línea de firma
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.moveTo(sig2X - 120, sigY);
    ctx.lineTo(sig2X + 120, sigY);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 16px "Hanken Grotesk", sans-serif';
    ctx.fillText('Dra. Elena Rostova', sig2X, sigY + 25);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '400 13px "Hanken Grotesk", sans-serif';
    ctx.fillText('Lead Frontend Architect & Evaluator', sig2X, sigY + 45);
    ctx.restore();

    // 10. Pie de página de verificación oficial
    ctx.save();
    ctx.fillStyle = '#64748b';
    ctx.font = '500 13px "JetBrains Mono", monospace';

    // Fecha a la izquierda
    ctx.textAlign = 'left';
    ctx.fillText(`Fecha de Emisión: ${issueDate}`, margin + 35, height - margin - 20);

    // ID de Credencial a la derecha
    ctx.textAlign = 'right';
    ctx.fillText(`ID de Verificación: ${credentialId} | Validar en frontendacademy.org/verify`, width - margin - 35, height - margin - 20);
    ctx.restore();
  },

  // Descarga el certificado como PNG
  downloadPNG: function (canvas, filename = 'Certificado_Frontend_Academy.png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  },

  // Descarga el certificado como JPG
  downloadJPG: function (canvas, filename = 'Certificado_Frontend_Academy.jpg') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
  }
};
